import React, { useState, useEffect } from "react";
import RegistrationTitle from "./RegistrationTitle";
import RegistrationDescription from "./RegistrationDescription";
import angleDown from "../img/angle-down.svg";
import checkCircle from "../img/check-circle.svg";
import calendar from "../img/calendar.svg";
import arrow from "../img/arrow.svg";
import leftArrow from "../img/left-arrow.svg";
import rightArrow from "../img/right-arrow.svg";
import { CountriesEN } from "./Countries";
import Loader from "react-loader-spinner";
import axios from "axios";
import linesImg from "../img/lines.png";
import { styled } from "frontity";
import Link from "./link";

const Signup = () => {
  const APi_URL =
    "https://test-csb-835946.online/wp-content/plugins/frontityPlugin/actions/actions.php";
  const d = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekNames = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const years = [];
  const firstYear = d.getFullYear() - 100;
  const lastYear = d.getFullYear() - 18;
  for (let i = lastYear; i >= firstYear; i--) {
    years.push(i);
  }
  const [selectedDate, setSelectedDate] = useState({
    year: years[0],
    month: d.getMonth(),
  });

  const [delegate, setDelegate] = useState(true);
  const [selectedBirthDay, setSelectedBirthDay] = useState({
    day: null,
    month: null,
    year: null,
  });
  const [saudiCountWords, setSaudiCountWords] = useState(0);
  const [nonSaudiCountWords, setNonSaudiCountWords] = useState(0);
  const [submitted, setSubmitted] = useState("Submit Form");
  const [success, setSuccess] = useState(false);
  const [saudiCountryToggle, setSaudiCountryToggle] = useState(false);
  const [nonSaudiCountryToggle, setNonSaudiCountryToggle] = useState(false);
  const [monthsToggle, setMonthsToggle] = useState(false);
  const [yearsToggle, setYearsToggle] = useState(false);
  const [nonSaudiNationalityToggle, setNonSaudiNationalityToggle] = useState(
    false
  );
  const [nonSaudiDateOfBirthToggle, setNonSaudiDateOfBirthToggle] = useState(
    false
  );
  const [clicked, setClicked] = useState(false);
  const [currentMonth, setCurrentMonth] = useState([]);

  const [state, setState] = useState({
    saudiDelegateTitle: "",
    nonSaudiDelegateTitle: "",
    saudiFirstName: "",
    nonSaudiFirstName: "",
    saudiSecondName: "",
    saudiThirdName: "",
    saudiLastName: "",
    nonSaudiLastName: "",
    saudiIDNumber: "",
    nonSaudiPassportNumber: "",
    // nonSaudiDateOfBirth: "",
    saudiCountry: "",
    nonSaudiCountry: "",
    nonSaudiNationality: "",
    saudiPersonalPhoto: "",
    nonSaudiPersonalPhoto: "",
    saudiJobTitle: "",
    nonSaudiJobTitle: "",
    saudiOrgName: "",
    nonSaudiOrgName: "",
    saudiOrgLogo: "",
    nonSaudiOrgLogo: "",
    saudiDelegateMobileNumber: "",
    nonSaudiDelegateMobileNumber: "",
    saudiDelegateOfficialEmail: "",
    nonSaudiDelegateOfficialEmail: "",
    saudiWrittenStatement: "",
    nonSaudiWrittenStatement: "",
    contactTitle: "",
    contactFirstName: "",
    contactLastName: "",
    contactJobTitle: "",
    contactMobileNumber: "",
    contactOfficialEmail: "",
  });

  const [errors, setErrors] = useState({
    saudiDelegateTitle: "",
    nonSaudiDelegateTitle: "",
    saudiFirstName: "",
    nonSaudiFirstName: "",
    saudiSecondName: "",
    saudiThirdName: "",
    saudiLastName: "",
    nonSaudiLastName: "",
    saudiIDNumber: "",
    nonSaudiPassportNumber: "",
    nonSaudiDateOfBirth: "",
    saudiCountry: "",
    nonSaudiCountry: "",
    nonSaudiNationality: "",
    saudiPersonalPhoto: "",
    nonSaudiPersonalPhoto: "",
    saudiJobTitle: "",
    nonSaudiJobTitle: "",
    saudiOrgName: "",
    nonSaudiOrgName: "",
    saudiOrgLogo: "",
    nonSaudiOrgLogo: "",
    saudiDelegateMobileNumber: "",
    nonSaudiDelegateMobileNumber: "",
    saudiDelegateOfficialEmail: "",
    nonSaudiDelegateOfficialEmail: "",
    saudiWrittenStatement: "",
    nonSaudiWrittenStatement: "",
    contactTitle: "",
    contactFirstName: "",
    contactLastName: "",
    contactJobTitle: "",
    contactMobileNumber: "",
    contactOfficialEmail: "",
  });

  const submitForm = () => {
    setClicked(true);
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (delegate) {
      if (state.saudiPersonalPhoto) {
        var saudiPhotoCorrectFormat = false;
        if (
          (state.saudiPersonalPhoto.type == "image/jpeg" ||
            state.saudiPersonalPhoto.type == "image/jpg" ||
            state.saudiPersonalPhoto.type == "image/png") &&
          state.saudiPersonalPhoto.size / 1048576 < 30
        ) {
          saudiPhotoCorrectFormat = true;
        }
      }
      if (state.saudiOrgLogo) {
        var saudiLogoCorrectFormat = false;
        if (
          (state.saudiOrgLogo.type == "image/svg+xml" ||
            state.saudiOrgLogo.type == "image/png") &&
          state.saudiOrgLogo.size / 1048576 < 30
        ) {
          saudiLogoCorrectFormat = true;
        }
      }
      setErrors({
        saudiDelegateTitle: state.saudiDelegateTitle ? "" : "Mandatory input!",
        saudiFirstName: state.saudiFirstName ? "" : "Mandatory input!",
        saudiSecondName: state.saudiSecondName ? "" : "Mandatory input!",
        saudiThirdName: state.saudiThirdName ? "" : "Mandatory input!",
        saudiLastName: state.saudiLastName ? "" : "Mandatory input!",
        saudiIDNumber: !state.saudiIDNumber
          ? "Mandatory input!"
          : new RegExp("\\D+").test(state.saudiIDNumber)
          ? "Only numbers allowed!"
          : "",
        saudiCountry: state.saudiCountry ? "" : "Mandatory input!",
        saudiPersonalPhoto: !state.saudiPersonalPhoto
          ? "Mandatory input!"
          : !saudiPhotoCorrectFormat
          ? "File format must be PNG, JPEG, JPG (Max Size: 30mb)"
          : "",
        saudiJobTitle: state.saudiJobTitle ? "" : "Mandatory input!",
        saudiOrgName: state.saudiOrgName ? "" : "Mandatory input!",
        saudiOrgLogo: !state.saudiOrgLogo
          ? "Mandatory input!"
          : !saudiLogoCorrectFormat
          ? "File format must be PNG, SVG (Max Size: 30mb)"
          : "",
        saudiDelegateMobileNumber: !state.saudiDelegateMobileNumber
          ? "Mandatory input!"
          : new RegExp("[^0-9+]+").test(state.saudiDelegateMobileNumber)
          ? "Only numbers allowed!"
          : "",
        saudiDelegateOfficialEmail: !state.saudiDelegateOfficialEmail
          ? "Mandatory input!"
          : !re.test(state.saudiDelegateOfficialEmail)
          ? "Incorrect email format!"
          : "",
        saudiWrittenStatement:
          saudiCountWords > 3000
            ? "Number of words should be less than 3000!"
            : "",
        contactTitle: state.contactTitle ? "" : "Mandatory input!",
        contactFirstName: state.contactFirstName ? "" : "Mandatory input!",
        contactLastName: state.contactLastName ? "" : "Mandatory input!",
        contactJobTitle: state.contactJobTitle ? "" : "Mandatory input!",
        contactMobileNumber: !state.contactMobileNumber
          ? "Mandatory input!"
          : new RegExp("[^0-9+]+").test(state.contactMobileNumber)
          ? "Only numbers allowed!"
          : "",
        contactOfficialEmail: !state.contactOfficialEmail
          ? "Mandatory input!"
          : !re.test(state.contactOfficialEmail)
          ? "Incorrect email format!"
          : "",
      });
    } else {
      if (state.nonSaudiPersonalPhoto) {
        var nonSaudiPhotoCorrectFormat = false;
        if (
          (state.nonSaudiPersonalPhoto.type == "image/jpeg" ||
            state.nonSaudiPersonalPhoto.type == "image/jpg" ||
            state.nonSaudiPersonalPhoto.type == "image/png") &&
          state.nonSaudiPersonalPhoto.size / 1048576 < 30
        ) {
          nonSaudiPhotoCorrectFormat = true;
        }
      }
      if (state.nonSaudiOrgLogo) {
        var nonSaudiLogoCorrectFormat = false;
        if (
          (state.nonSaudiOrgLogo.type == "image/svg+xml" ||
            state.nonSaudiOrgLogo.type == "image/png") &&
          state.nonSaudiOrgLogo.size / 1048576 < 30
        ) {
          nonSaudiLogoCorrectFormat = true;
        }
      }
      setErrors({
        nonSaudiDelegateTitle: state.nonSaudiDelegateTitle
          ? ""
          : "Mandatory input!",
        nonSaudiFirstName: state.nonSaudiFirstName ? "" : "Mandatory input!",
        nonSaudiLastName: state.nonSaudiLastName ? "" : "Mandatory input!",
        nonSaudiNationality: state.nonSaudiNationality
          ? ""
          : "Mandatory input!",
        nonSaudiPassportNumber: state.nonSaudiPassportNumber
          ? ""
          : "Mandatory input!",
        nonSaudiDateOfBirth: selectedBirthDay.day ? "" : "Mandatory input!",
        nonSaudiCountry: state.nonSaudiCountry ? "" : "Mandatory input!",
        nonSaudiPersonalPhoto: !state.nonSaudiPersonalPhoto
          ? "Mandatory input!"
          : !nonSaudiPhotoCorrectFormat
          ? "File format must be PNG, JPEG, JPG (Max Size: 30mb)"
          : "",
        nonSaudiJobTitle: state.nonSaudiJobTitle ? "" : "Mandatory input!",
        nonSaudiOrgName: state.nonSaudiOrgName ? "" : "Mandatory input!",
        nonSaudiOrgLogo: !state.nonSaudiOrgLogo
          ? "Mandatory input!"
          : !nonSaudiLogoCorrectFormat
          ? "File format must be PNG, SVG (Max Size: 30mb)"
          : "",
        nonSaudiDelegateMobileNumber: !state.nonSaudiDelegateMobileNumber
          ? "Mandatory input!"
          : new RegExp("[^0-9+]+").test(state.nonSaudiDelegateMobileNumber)
          ? "Only numbers allowed!"
          : "",
        nonSaudiDelegateOfficialEmail: !state.nonSaudiDelegateOfficialEmail
          ? "Mandatory input!"
          : !re.test(state.nonSaudiDelegateOfficialEmail)
          ? "Incorrect email format!"
          : "",
        nonSaudiWrittenStatement:
          nonSaudiCountWords > 3000
            ? "Number of words should be less than 3000!"
            : "",
        contactTitle: state.contactTitle ? "" : "Mandatory input!",
        contactFirstName: state.contactFirstName ? "" : "Mandatory input!",
        contactLastName: state.contactLastName ? "" : "Mandatory input!",
        contactJobTitle: state.contactJobTitle ? "" : "Mandatory input!",
        contactMobileNumber: !state.contactMobileNumber
          ? "Mandatory input!"
          : new RegExp("[^0-9+]+").test(state.contactMobileNumber)
          ? "Only numbers allowed!"
          : "",
        contactOfficialEmail: !state.contactOfficialEmail
          ? "Mandatory input!"
          : !re.test(state.contactOfficialEmail)
          ? "Incorrect email format!"
          : "",
      });
    }
  };

  const createDaysArray = () => {
    let dateArr = [],
      lastDay = new Date(selectedDate.year, selectedDate.month + 1, 0),
      weeks = Array(7).join("1").split("1"),
      date;

    for (let i = 1; i < lastDay.getDate() + 1; i++) {
      date = new Date(selectedDate.year, selectedDate.month, i);

      if (date.getDay() === 0) {
        weeks.join("") !== "" && dateArr.push(weeks);
        weeks = Array(7).join("1").split("1");
      }

      weeks[date.getDay()] = date.getDate();
    }

    weeks.length = weeks.length ? 7 : 0;
    weeks.length && dateArr.push(weeks);

    setCurrentMonth(dateArr);
  };

  const changeMonth = (direction) => {
    let year = selectedDate.year,
      month = selectedDate.month;

    month = direction === "next" ? month + 1 : month - 1;

    if (month === 12) {
      if (year === years[0]) {
        month = 11;
      } else {
        month = 0;
        year++;
      }
    } else if (month === -1) {
      if (year === years[years.length - 1]) {
        month = 0;
      } else {
        month = 11;
        year--;
      }
    }
    setSelectedDate({ ...selectedDate, month: month, year: year });
  };

  useEffect(() => {
    var found = false;
    for (const error in errors) {
      if (errors[error] && clicked) {
        window.scrollTo({
          behavior: "smooth",
          top: document.querySelector(`[name="${error}"]`).offsetTop - 150,
        });
        found = true;
        break;
      }
    }
    if (clicked && !found) {
      if (delegate) {
        var fd = new FormData();
        fd.append("type", "saudi");
        fd.append("action", "save_user");
        fd.append("saudiDelegateTitle", state.saudiDelegateTitle);
        fd.append("saudiFirstName", state.saudiFirstName);
        fd.append("saudiSecondName", state.saudiSecondName);
        fd.append("saudiThirdName", state.saudiThirdName);
        fd.append("saudiLastName", state.saudiLastName);
        fd.append("saudiIDNumber", state.saudiIDNumber);
        fd.append("saudiCountry", state.saudiCountry);
        fd.append("saudiPersonalPhoto", state.saudiPersonalPhoto);
        fd.append("saudiJobTitle", state.saudiJobTitle);
        fd.append("saudiOrgName", state.saudiOrgName);
        fd.append("saudiOrgLogo", state.saudiOrgLogo);
        fd.append("saudiDelegateMobileNumber", state.saudiDelegateMobileNumber);
        fd.append(
          "saudiDelegateOfficialEmail",
          state.saudiDelegateOfficialEmail
        );
        fd.append("saudiWrittenStatement", state.saudiWrittenStatement);
        fd.append("contactTitle", state.contactTitle);
        fd.append("contactFirstName", state.contactFirstName);
        fd.append("contactLastName", state.contactLastName);
        fd.append("contactJobTitle", state.contactJobTitle);
        fd.append("contactMobileNumber", state.contactMobileNumber);
        fd.append("contactOfficialEmail", state.contactOfficialEmail);
      } else {
        var fd = new FormData();
        fd.append("type", "nonSaudi");
        fd.append("action", "save_user");
        fd.append("nonSaudiDelegateTitle", state.nonSaudiDelegateTitle);
        fd.append("nonSaudiFirstName", state.nonSaudiFirstName);
        fd.append("nonSaudiLastName", state.nonSaudiLastName);
        fd.append("nonSaudiPassportNumber", state.nonSaudiPassportNumber);
        fd.append(
          "nonSaudiDateOfBirth",
          `${selectedBirthDay.day} ${monthNames[selectedBirthDay.month]} ${
            selectedBirthDay.year
          }`
        );
        fd.append("nonSaudiCountry", state.nonSaudiCountry);
        fd.append("nonSaudiNationality", state.nonSaudiNationality);
        fd.append("nonSaudiPersonalPhoto", state.nonSaudiPersonalPhoto);
        fd.append("nonSaudiJobTitle", state.nonSaudiJobTitle);
        fd.append("nonSaudiOrgName", state.nonSaudiOrgName);
        fd.append("nonSaudiOrgLogo", state.nonSaudiOrgLogo);
        fd.append(
          "nonSaudiDelegateMobileNumber",
          state.nonSaudiDelegateMobileNumber
        );
        fd.append(
          "nonSaudiDelegateOfficialEmail",
          state.nonSaudiDelegateOfficialEmail
        );
        fd.append("nonSaudiWrittenStatement", state.nonSaudiWrittenStatement);
        fd.append("contactTitle", state.contactTitle);
        fd.append("contactFirstName", state.contactFirstName);
        fd.append("contactLastName", state.contactLastName);
        fd.append("contactJobTitle", state.contactJobTitle);
        fd.append("contactMobileNumber", state.contactMobileNumber);
        fd.append("contactOfficialEmail", state.contactOfficialEmail);
      }
      setSubmitted("Submitting");

      axios
        .post(APi_URL, fd, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setSubmitted("Submitted!");
            setTimeout(() => {
              setSuccess(true);
            }, 2000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [errors]);

  useEffect(() => {
    createDaysArray();
  }, [selectedDate, selectedBirthDay]);

  const setSaudiDelegateTitle = (value) => {
    if (value.length <= 10 && !new RegExp("[^A-z.]").test(value)) {
      setState({
        ...state,
        saudiDelegateTitle: value,
      });
    }
  };

  const setSaudiFirstName = (value) => {
    if (value.length <= 30) {
      setState({
        ...state,
        saudiFirstName: value,
      });
    }
  };

  const setSaudiSecondName = (value) => {
    if (value.length <= 30) {
      setState({
        ...state,
        saudiSecondName: value,
      });
    }
  };

  const setSaudiThirdName = (value) => {
    if (value.length <= 30) {
      setState({
        ...state,
        saudiThirdName: value,
      });
    }
  };

  const setSaudiLastName = (value) => {
    if (value.length <= 30) {
      setState({
        ...state,
        saudiLastName: value,
      });
    }
  };

  const setSaudiIDNumber = (value) => {
    if (value.length <= 10) {
      setState({
        ...state,
        saudiIDNumber: value,
      });
    }
    if (new RegExp("[^0-9]").test(value)) {
      setErrors({
        ...errors,
        saudiIDNumber: "Only numbers allowed!",
      });
    } else {
      setErrors({
        ...errors,
        saudiIDNumber: "",
      });
    }
  };

  const setSaudiPersonalPhoto = (file) => {
    if (
      (file.type == "image/jpeg" ||
        file.type == "image/jpg" ||
        file.type == "image/png") &&
      file.size / 1048576 < 30
    ) {
      setState({
        ...state,
        saudiPersonalPhoto: file,
      });
      setErrors({
        ...errors,
        saudiPersonalPhoto: "",
      });
    } else {
      setErrors({
        ...errors,
        saudiPersonalPhoto:
          "File format must be PNG, JPEG, JPG (Max Size: 30mb)",
      });
    }
  };

  const setSaudiJobTitle = (value) => {
    if (value.length <= 100) {
      setState({
        ...state,
        saudiJobTitle: value,
      });
    }
  };

  const setSaudiOrgName = (value) => {
    if (value.length <= 100) {
      setState({
        ...state,
        saudiOrgName: value,
      });
    }
  };

  const setSaudiOrgLogo = (file) => {
    if (
      (file.type == "image/svg+xml" || file.type == "image/png") &&
      file.size / 1048576 < 30
    ) {
      setState({
        ...state,
        saudiOrgLogo: file,
      });
      setErrors({
        ...errors,
        saudiOrgLogo: "",
      });
    } else {
      setErrors({
        ...errors,
        saudiOrgLogo: "File format must be PNG, SVG (Max Size: 30mb)",
      });
    }
  };

  const setSaudiDelegateMobileNumber = (value) => {
    if (value.length <= 20) {
      setState({
        ...state,
        saudiDelegateMobileNumber: value,
      });
    }
    if (new RegExp("[^0-9+]+").test(value)) {
      setErrors({
        ...errors,
        saudiDelegateMobileNumber: "Only numbers allowed!",
      });
    } else {
      setErrors({
        ...errors,
        saudiDelegateMobileNumber: "",
      });
    }
  };

  const setSaudiDelegateOfficialEmail = (value) => {
    const reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (value.length <= 100) {
      setState({
        ...state,
        saudiDelegateOfficialEmail: value,
      });
    }

    if (!reg.test(value)) {
      setErrors({
        ...errors,
        saudiDelegateOfficialEmail: "Incorrect email format!",
      });
    } else {
      setErrors({
        ...errors,
        saudiDelegateOfficialEmail: "",
      });
    }
  };

  const setSaudiWrittenStatement = (str) => {
    if (str.trim().split(/\s+/).length <= 3000) {
      setState({ ...state, saudiWrittenStatement: str });
      !str
        ? setSaudiCountWords(0)
        : setSaudiCountWords(str.trim().split(/\s+/).length);
    }
  };

  const setNonSaudiDelegateTitle = (value) => {
    if (value.length <= 10 && !new RegExp("[^A-z.]").test(value)) {
      setState({
        ...state,
        nonSaudiDelegateTitle: value,
      });
    }
  };

  const setNonSaudiFirstName = (value) => {
    if (value.length <= 30) {
      setState({
        ...state,
        nonSaudiFirstName: value,
      });
    }
  };

  const setNonSaudiLastName = (value) => {
    if (value.length <= 30) {
      setState({
        ...state,
        nonSaudiLastName: value,
      });
    }
  };

  const setNonSaudiPassportNumber = (value) => {
    if (value.length <= 15 && !new RegExp("[^0-9A-z]").test(value)) {
      setState({
        ...state,
        nonSaudiPassportNumber: value,
      });
    }
  };

  const setNonSaudiPersonalPhoto = (file) => {
    if (
      (file.type == "image/jpeg" ||
        file.type == "image/jpg" ||
        file.type == "image/png") &&
      file.size / 1048576 < 30
    ) {
      setState({
        ...state,
        nonSaudiPersonalPhoto: file,
      });
      setErrors({
        ...errors,
        nonSaudiPersonalPhoto: "",
      });
    } else {
      setErrors({
        ...errors,
        nonSaudiPersonalPhoto:
          "File format must be PNG, JPEG, JPG (Max Size: 30mb)",
      });
    }
  };

  const setNonSaudiJobTitle = (value) => {
    if (value.length <= 100) {
      setState({
        ...state,
        nonSaudiJobTitle: value,
      });
    }
  };

  const setNonSaudiOrgName = (value) => {
    if (value.length <= 100) {
      setState({
        ...state,
        nonSaudiOrgName: value,
      });
    }
  };

  const setNonSaudiOrgLogo = (file) => {
    if (
      (file.type == "image/svg+xml" || file.type == "image/png") &&
      file.size / 1048576 < 30
    ) {
      setState({
        ...state,
        nonSaudiOrgLogo: file,
      });
      setErrors({
        ...errors,
        nonSaudiOrgLogo: "",
      });
    } else {
      setErrors({
        ...errors,
        nonSaudiOrgLogo: "File format must be PNG, SVG (Max Size: 30mb)",
      });
    }
  };

  const setNonSaudiDelegateMobileNumber = (value) => {
    if (value.length <= 20) {
      setState({
        ...state,
        nonSaudiDelegateMobileNumber: value,
      });
    }
    if (new RegExp("[^0-9+]+").test(value)) {
      setErrors({
        ...errors,
        nonSaudiDelegateMobileNumber: "Only numbers allowed!",
      });
    } else {
      setErrors({
        ...errors,
        nonSaudiDelegateMobileNumber: "",
      });
    }
  };

  const setNonSaudiDelegateOfficialEmail = (value) => {
    const reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (value.length <= 100) {
      setState({
        ...state,
        nonSaudiDelegateOfficialEmail: value,
      });
    }

    if (!reg.test(value)) {
      setErrors({
        ...errors,
        nonSaudiDelegateOfficialEmail: "Incorrect email format!",
      });
    } else {
      setErrors({
        ...errors,
        nonSaudiDelegateOfficialEmail: "",
      });
    }
  };

  const setNonSaudiWrittenStatement = (str) => {
    if (str.trim().split(/\s+/).length <= 3000) {
      setState({ ...state, nonSaudiWrittenStatement: str });
      !str
        ? setNonSaudiCountWords(0)
        : setNonSaudiCountWords(str.trim().split(/\s+/).length);
    }
  };

  const setContactTitle = (value) => {
    if (value.length <= 10 && !new RegExp("[^A-z.]").test(value)) {
      setState({
        ...state,
        contactTitle: value,
      });
    }
  };

  const setContactFirstName = (value) => {
    if (value.length <= 30) {
      setState({
        ...state,
        contactFirstName: value,
      });
    }
  };

  const setContactLastName = (value) => {
    if (value.length <= 30) {
      setState({
        ...state,
        contactLastName: value,
      });
    }
  };

  const setContactJobTitle = (value) => {
    if (value.length <= 100) {
      setState({
        ...state,
        contactJobTitle: value,
      });
    }
  };

  const setContactMobileNumber = (value) => {
    if (value.length <= 20) {
      setState({
        ...state,
        contactMobileNumber: value,
      });
    }
    if (new RegExp("[^0-9+]+").test(value)) {
      setErrors({
        ...errors,
        contactMobileNumber: "Only numbers allowed!",
      });
    } else {
      setErrors({
        ...errors,
        contactMobileNumber: "",
      });
    }
  };

  const setContactOfficialEmail = (value) => {
    const reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (value.length <= 100) {
      setState({
        ...state,
        contactOfficialEmail: value,
      });
    }

    if (!reg.test(value)) {
      setErrors({
        ...errors,
        contactOfficialEmail: "Incorrect email format!",
      });
    } else {
      setErrors({
        ...errors,
        contactOfficialEmail: "",
      });
    }
  };

  return (
    <div className="registration-section">
      <div className="container registration-container">
        {!success ? (
          <>
            <RegistrationTitle />
            <RegistrationDescription />
            <div className="delegate-information-section">
              <h1 className="title">Head of Delegation Information</h1>
              <div className="choose-delegate">
                <p>The head of delegation is a:</p>
                <div className="custom-radio-container">
                  <div className={`custom-radio`}>
                    <label
                      htmlFor="saudi-citizen"
                      className={`${delegate && "selected"}`}
                    >
                      <input
                        type="radio"
                        id="saudi-citizen"
                        name="delegate-radio"
                        checked={delegate}
                        onChange={() => setDelegate(true)}
                      />
                      &nbsp;&nbsp;Saudi Citizen
                    </label>
                  </div>
                  <div className={`custom-radio`}>
                    <label
                      htmlFor="non-saudi"
                      className={`${!delegate && "selected"}`}
                    >
                      <input
                        type="radio"
                        id="non-saudi"
                        name="delegate-radio"
                        checked={!delegate}
                        onChange={() => setDelegate(false)}
                      />
                      &nbsp;&nbsp;Non-Saudi National
                    </label>
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "BukraLight",
                    color: "#fff",
                    fontSize: "12px",
                    marginTop: "16px",
                  }}
                >
                  Input elements below will change based on this selection
                </div>
              </div>

              {delegate ? (
                <div className="saudi-citizen-section">
                  <div className="input-fields" name="saudiDelegateTitle">
                    <label>
                      * Title <span> &nbsp;(Public View)</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      value={state.saudiDelegateTitle}
                      onChange={(event) =>
                        setSaudiDelegateTitle(event.target.value)
                      }
                      onFocus={() => {
                        setErrors({
                          ...errors,
                          saudiDelegateTitle: "",
                        }),
                          setClicked(false);
                      }}
                      autoComplete="off"
                      className={errors.saudiDelegateTitle && "inputError"}
                    />
                    <div className="example">Mr, Ms, Dr, Prof, etc.</div>
                    <div className="example" style={{ marginTop: "10px" }}>
                      {errors.saudiDelegateTitle}
                    </div>
                  </div>
                  <div className="input-fields" name="saudiFirstName">
                    <label>
                      * First Name <span> &nbsp;(Public View)</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      value={state.saudiFirstName}
                      onChange={(event) =>
                        setSaudiFirstName(event.target.value)
                      }
                      onFocus={() => {
                        setErrors({
                          ...errors,
                          saudiFirstName: "",
                        }),
                          setClicked(false);
                      }}
                      autoComplete="off"
                      className={errors.saudiFirstName && "inputError"}
                    />
                    <div className="example">{errors.saudiFirstName}</div>
                  </div>
                  <div className="input-fields" name="saudiSecondName">
                    <label>
                      * 2<sup>nd</sup> Name <span> &nbsp;(Public View)</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      value={state.saudiSecondName}
                      onChange={(event) =>
                        setSaudiSecondName(event.target.value)
                      }
                      onFocus={() => {
                        setErrors({
                          ...errors,
                          saudiSecondName: "",
                        }),
                          setClicked(false);
                      }}
                      autoComplete="off"
                      className={errors.saudiSecondName && "inputError"}
                    />
                    <div className="example">{errors.saudiSecondName}</div>
                  </div>
                  <div className="input-fields" name="saudiThirdName">
                    <label>
                      * 3<sup>rd</sup> Name <span> &nbsp;(Public View)</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      value={state.saudiThirdName}
                      onChange={(event) =>
                        setSaudiThirdName(event.target.value)
                      }
                      onFocus={() => {
                        setErrors({
                          ...errors,
                          saudiThirdName: "",
                        }),
                          setClicked(false);
                      }}
                      autoComplete="off"
                      className={errors.saudiThirdName && "inputError"}
                    />
                    <div className="example">{errors.saudiThirdName}</div>
                  </div>
                  <div className="input-fields" name="saudiLastName">
                    <label>
                      * Last Name <span> &nbsp;(Public View)</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      value={state.saudiLastName}
                      onChange={(event) => setSaudiLastName(event.target.value)}
                      onFocus={() => {
                        setErrors({
                          ...errors,
                          saudiLastName: "",
                        }),
                          setClicked(false);
                      }}
                      autoComplete="off"
                      className={errors.saudiLastName && "inputError"}
                    />
                    <div className="example">{errors.saudiLastName}</div>
                  </div>
                  <div className="input-fields" name="saudiIDNumber">
                    <label>* Saudi National ID Number</label>
                    <br />
                    <input
                      type="text"
                      value={state.saudiIDNumber}
                      onChange={(event) => setSaudiIDNumber(event.target.value)}
                      onFocus={() => {
                        setErrors({
                          ...errors,
                          saudiIDNumber: "",
                        }),
                          setClicked(false);
                      }}
                      autoComplete="off"
                      className={errors.saudiIDNumber && "inputError"}
                    />
                    <div className="example">{errors.saudiIDNumber}</div>
                  </div>
                  <div className="input-fields" name="saudiCountry">
                    <label>
                      * Current Country of Residence
                      <span> &nbsp;(Public View)</span>
                    </label>
                    <div
                      className={`dropdown ${
                        errors.saudiCountry && "inputError"
                      }`}
                      onClick={() => setSaudiCountryToggle(!saudiCountryToggle)}
                    >
                      <div className="selectedCountry">
                        {state.saudiCountry}
                      </div>
                      <div
                        className={`arrow ${
                          errors.saudiCountry && "arrowError"
                        }`}
                      >
                        <img
                          className={`${saudiCountryToggle && "toggled"}`}
                          src={angleDown}
                        />
                      </div>
                      <div
                        className={`dropdown-list ${
                          saudiCountryToggle && "open"
                        } ${errors.saudiCountry && "inputError"}`}
                      >
                        {CountriesEN.map((country, index) => {
                          return (
                            <div
                              key={index}
                              className={`dropdown-item ${
                                state.saudiCountry == country && "selected"
                              }`}
                              onClick={() => {
                                setState({ ...state, saudiCountry: country }),
                                  setErrors({ ...errors, saudiCountry: "" }),
                                  setClicked(false);
                              }}
                            >
                              {country}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="example">{errors.saudiCountry}</div>
                  </div>
                  <div className="input-fields" name="saudiPersonalPhoto">
                    <label>
                      * Personal Photo <span> &nbsp;(Public View)</span>
                    </label>
                    <div
                      className={`file-input ${
                        errors.saudiPersonalPhoto && "inputError"
                      }`}
                    >
                      <input
                        type="file"
                        onChange={(e) =>
                          setSaudiPersonalPhoto(e.target.files[0])
                        }
                      />
                      <div
                        className={`choose-part ${
                          errors.saudiPersonalPhoto && "arrowError"
                        }`}
                      >
                        Choose
                      </div>
                      <div className="filename">
                        {state.saudiPersonalPhoto
                          ? state.saudiPersonalPhoto.name
                          : "No File Selected!"}
                      </div>
                    </div>
                    <div className="example">
                      PNG, JPEG, JPG (Max Size: 30mb)
                    </div>
                    <div className="example" style={{ marginTop: "10px" }}>
                      {errors.saudiPersonalPhoto}
                    </div>
                  </div>
                  <div className="input-fields" name="saudiJobTitle">
                    <label>
                      * Position / Job Title <span> &nbsp;(Public View)</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      value={state.saudiJobTitle}
                      onChange={(event) => setSaudiJobTitle(event.target.value)}
                      onFocus={() => {
                        setErrors({
                          ...errors,
                          saudiJobTitle: "",
                        }),
                          setClicked(false);
                      }}
                      autoComplete="off"
                      className={errors.saudiJobTitle && "inputError"}
                    />
                    <div className="example">{errors.saudiJobTitle}</div>
                  </div>
                  <div className="input-fields" name="saudiOrgName">
                    <label>
                      * Organization Name <span> &nbsp;(Public View)</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      value={state.saudiOrgName}
                      onChange={(event) => setSaudiOrgName(event.target.value)}
                      onFocus={() => {
                        setErrors({
                          ...errors,
                          saudiOrgName: "",
                        }),
                          setClicked(false);
                      }}
                      autoComplete="off"
                      className={errors.saudiOrgName && "inputError"}
                    />
                    <div className="example">{errors.saudiOrgName}</div>
                  </div>
                  <div className="input-fields" name="saudiOrgLogo">
                    <label>
                      * Organization Logo <span> &nbsp;(Public View)</span>
                    </label>
                    <div
                      className={`file-input ${
                        errors.saudiOrgLogo && "inputError"
                      }`}
                    >
                      <input
                        type="file"
                        onChange={(e) => setSaudiOrgLogo(e.target.files[0])}
                      />
                      <div
                        className={`choose-part ${
                          errors.saudiOrgLogo && "arrowError"
                        }`}
                      >
                        Choose
                      </div>
                      <div className="filename">
                        {state.saudiOrgLogo
                          ? state.saudiOrgLogo.name
                          : "No File Selected!"}
                      </div>
                    </div>
                    <div className="example">PNG, SVG (Max Size: 30mb)</div>
                    <div className="example" style={{ marginTop: "10px" }}>
                      {errors.saudiOrgLogo}
                    </div>
                  </div>
                  <div
                    className="input-fields"
                    name="saudiDelegateMobileNumber"
                  >
                    <label>* Mobile Number</label>
                    <br />
                    <input
                      type="text"
                      value={state.saudiDelegateMobileNumber}
                      onChange={(event) =>
                        setSaudiDelegateMobileNumber(event.target.value)
                      }
                      onFocus={() => {
                        setErrors({
                          ...errors,
                          saudiDelegateMobileNumber: "",
                        }),
                          setClicked(false);
                      }}
                      autoComplete="off"
                      className={
                        errors.saudiDelegateMobileNumber && "inputError"
                      }
                    />
                    <div className="example">Include country code!</div>
                    <div className="example" style={{ marginTop: "10px" }}>
                      {errors.saudiDelegateMobileNumber}
                    </div>
                  </div>
                  <div
                    className="input-fields"
                    name="saudiDelegateOfficialEmail"
                  >
                    <label>* Official Email</label>
                    <br />
                    <input
                      type="text"
                      value={state.saudiDelegateOfficialEmail}
                      onChange={(event) =>
                        setSaudiDelegateOfficialEmail(event.target.value)
                      }
                      onFocus={() => {
                        setErrors({
                          ...errors,
                          saudiDelegateOfficialEmail: "",
                        }),
                          setClicked(false);
                      }}
                      autoComplete="off"
                      className={
                        errors.saudiDelegateOfficialEmail && "inputError"
                      }
                    />
                    <div className="example">
                      {errors.saudiDelegateOfficialEmail}
                    </div>
                  </div>
                  <div className="input-fields" name="saudiWrittenStatement">
                    <label>Written Statement</label>
                    <br />
                    <textarea
                      value={state.saudiWrittenStatement}
                      onChange={(event) =>
                        setSaudiWrittenStatement(event.target.value)
                      }
                      onFocus={() => {
                        setErrors({
                          ...errors,
                          saudiWrittenStatement: "",
                        }),
                          setClicked(false);
                      }}
                      autoComplete="off"
                      className={errors.saudiWrittenStatement && "inputError"}
                    ></textarea>
                    <div className="limitWords">
                      <p style={{ fontFamily: "BukraLight" }}>
                        Less than 3000 words
                      </p>
                      <p style={{ fontFamily: "BukraBold" }}>
                        {saudiCountWords}/3000
                      </p>
                    </div>
                    <div className="example">
                      {errors.saudiWrittenStatement}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="non-saudi-citizen-section">
                  <div className="input-fields" name="nonSaudiDelegateTitle">
                    <label>
                      * Title <span> &nbsp;(Public View)</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      value={state.nonSaudiDelegateTitle}
                      onChange={(event) =>
                        setNonSaudiDelegateTitle(event.target.value)
                      }
                      onFocus={() => {
                        setErrors({
                          ...errors,
                          nonSaudiDelegateTitle: "",
                        }),
                          setClicked(false);
                      }}
                      autoComplete="off"
                      className={errors.nonSaudiDelegateTitle && "inputError"}
                    />
                    <div className="example">Mr, Ms, Dr, Prof, etc.</div>
                    <div className="example" style={{ marginTop: "10px" }}>
                      {errors.nonSaudiDelegateTitle}
                    </div>
                  </div>
                  <div className="input-fields" name="nonSaudiFirstName">
                    <label>
                      * First Name <span> &nbsp;(Public View)</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      value={state.nonSaudiFirstName}
                      onChange={(event) =>
                        setNonSaudiFirstName(event.target.value)
                      }
                      onFocus={() => {
                        setErrors({
                          ...errors,
                          nonSaudiFirstName: "",
                        }),
                          setClicked(false);
                      }}
                      autoComplete="off"
                      className={errors.nonSaudiFirstName && "inputError"}
                    />
                    <div className="example">{errors.nonSaudiFirstName}</div>
                  </div>
                  <div className="input-fields" name="nonSaudiLastName">
                    <label>
                      * Last Name <span> &nbsp;(Public View)</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      value={state.nonSaudiLastName}
                      onChange={(event) =>
                        setNonSaudiLastName(event.target.value)
                      }
                      onFocus={() => {
                        setErrors({
                          ...errors,
                          nonSaudiLastName: "",
                        }),
                          setClicked(false);
                      }}
                      autoComplete="off"
                      className={errors.nonSaudiLastName && "inputError"}
                    />
                    <div className="example">{errors.nonSaudiLastName}</div>
                  </div>
                  <div className="input-fields" name="nonSaudiNationality">
                    <label>
                      * Nationality <span> &nbsp;(Public View)</span>
                    </label>
                    <div
                      className={`dropdown ${
                        errors.nonSaudiNationality && "inputError"
                      }`}
                      onClick={() =>
                        setNonSaudiNationalityToggle(!nonSaudiNationalityToggle)
                      }
                    >
                      <div className="selectedCountry">
                        {state.nonSaudiNationality}
                      </div>
                      <div
                        className={`arrow ${
                          errors.nonSaudiNationality && "arrowError"
                        }`}
                      >
                        <img
                          className={`${
                            nonSaudiNationalityToggle && "toggled"
                          }`}
                          src={angleDown}
                        />
                      </div>
                      <div
                        className={`dropdown-list ${
                          nonSaudiNationalityToggle && "open"
                        } ${errors.nonSaudiNationality && "inputError"}`}
                      >
                        {CountriesEN.map((country, index) => {
                          return (
                            <div
                              key={index}
                              className={`dropdown-item ${
                                state.nonSaudiNationality == country &&
                                "selected"
                              }`}
                              onClick={() => {
                                setState({
                                  ...state,
                                  nonSaudiNationality: country,
                                }),
                                  setErrors({
                                    ...errors,
                                    nonSaudiNationality: "",
                                  }),
                                  setClicked(false);
                              }}
                            >
                              {country}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="input-fields" name="nonSaudiPassportNumber">
                    <label>* Passport Number</label>
                    <br />
                    <input
                      type="text"
                      value={state.nonSaudiPassportNumber}
                      onChange={(event) =>
                        setNonSaudiPassportNumber(event.target.value)
                      }
                      onFocus={() => {
                        setErrors({
                          ...errors,
                          nonSaudiPassportNumber: "",
                        }),
                          setClicked(false);
                      }}
                      autoComplete="off"
                      className={errors.nonSaudiPassportNumber && "inputError"}
                    />
                    <div className="example">
                      {errors.nonSaudiPassportNumber}
                    </div>
                  </div>
                  <div className="input-fields" name="nonSaudiDateOfBirth">
                    <label>* Date of Birth</label>
                    <div
                      className={`dropdown ${
                        errors.nonSaudiDateOfBirth && "inputError"
                      }`}
                    >
                      <div className="selectedDate">
                        {selectedBirthDay.day}{" "}
                        {monthNames[selectedBirthDay.month]}{" "}
                        {selectedBirthDay.year}
                      </div>
                      <div
                        className={`arrow ${
                          errors.nonSaudiDateOfBirth && "arrowError"
                        }`}
                        onClick={() =>
                          setNonSaudiDateOfBirthToggle(
                            !nonSaudiDateOfBirthToggle
                          )
                        }
                      >
                        <img src={calendar} />
                      </div>
                      <div
                        className={`date-picker ${
                          nonSaudiDateOfBirthToggle && "open"
                        } ${errors.nonSaudiDateOfBirth && "inputError"}`}
                      >
                        <div className="calendar-header">
                          <div
                            className={`left-arrow ${
                              errors.nonSaudiDateOfBirth && "arrowError"
                            }`}
                            onClick={() => changeMonth("prev")}
                          >
                            <img src={leftArrow} />
                          </div>
                          <div
                            className="months"
                            onClick={() => setMonthsToggle(!monthsToggle)}
                          >
                            <img
                              className={`${monthsToggle && "open"}`}
                              src={arrow}
                            />
                            <span>{monthNames[selectedDate.month]}</span>
                            <div
                              className={`months-list ${
                                monthsToggle && "open"
                              }`}
                            >
                              {monthNames.map((month, index) => {
                                return (
                                  <p
                                    key={index}
                                    onClick={() => {
                                      setSelectedDate({
                                        ...selectedDate,
                                        month: index,
                                      });
                                    }}
                                    className={`${
                                      month == monthNames[selectedDate.month] &&
                                      "selectedMonth"
                                    }`}
                                  >
                                    {month}
                                  </p>
                                );
                              })}
                            </div>
                          </div>
                          <div
                            className="years"
                            onClick={() => setYearsToggle(!yearsToggle)}
                          >
                            <img
                              className={`${yearsToggle && "open"}`}
                              src={arrow}
                            />{" "}
                            <span>{selectedDate.year}</span>
                            <div
                              className={`years-list ${yearsToggle && "open"}`}
                            >
                              {years.map((year, index) => {
                                return (
                                  <p
                                    key={index}
                                    onClick={() => {
                                      setSelectedDate({
                                        ...selectedDate,
                                        year: year,
                                      });
                                    }}
                                    className={`${
                                      year == selectedDate.year &&
                                      "selectedYear"
                                    }`}
                                  >
                                    {year}
                                  </p>
                                );
                              })}
                            </div>
                          </div>
                          <div
                            className={`right-arrow ${
                              errors.nonSaudiDateOfBirth && "arrowError"
                            }`}
                            onClick={() => changeMonth("next")}
                          >
                            <img src={rightArrow} />
                          </div>
                        </div>
                        <div className="week-days">
                          {weekNames.map((week, index) => {
                            return <div key={index}>{week}</div>;
                          })}
                        </div>
                        {currentMonth.map((week, index) => {
                          return (
                            <div key={index} className="week-days-numbers">
                              {week.map((day, ind) => {
                                return (
                                  <div
                                    className={`${
                                      selectedBirthDay.day == day &&
                                      selectedBirthDay.month ==
                                        selectedDate.month &&
                                      selectedBirthDay.year ==
                                        selectedDate.year &&
                                      "selectedDay"
                                    }`}
                                    key={ind}
                                    onClick={() => {
                                      setSelectedBirthDay({
                                        day: day,
                                        month: selectedDate.month,
                                        year: selectedDate.year,
                                      }),
                                        setNonSaudiDateOfBirthToggle(
                                          !nonSaudiDateOfBirthToggle
                                        ),
                                        setErrors({
                                          ...errors,
                                          nonSaudiDateOfBirth: "",
                                        }),
                                        setClicked(false);
                                    }}
                                  >
                                    {day}
                                  </div>
                                );
                              })}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="input-fields" name="nonSaudiCountry">
                    <label>
                      * Current Country of Residence{" "}
                      <span> &nbsp;(Public View)</span>
                    </label>
                    <div
                      className={`dropdown ${
                        errors.nonSaudiCountry && "inputError"
                      }`}
                      onClick={() =>
                        setNonSaudiCountryToggle(!nonSaudiCountryToggle)
                      }
                    >
                      <div className="selectedCountry">
                        {state.nonSaudiCountry}
                      </div>
                      <div
                        className={`arrow ${
                          errors.nonSaudiCountry && "arrowError"
                        }`}
                      >
                        <img
                          className={`${nonSaudiCountryToggle && "toggled"}`}
                          src={angleDown}
                        />
                      </div>
                      <div
                        className={`dropdown-list ${
                          nonSaudiCountryToggle && "open"
                        } ${errors.nonSaudiCountry && "inputError"}`}
                      >
                        {CountriesEN.map((country, index) => {
                          return (
                            <div
                              key={index}
                              className={`dropdown-item ${
                                state.nonSaudiCountry == country && "selected"
                              }`}
                              onClick={() => {
                                setState({
                                  ...state,
                                  nonSaudiCountry: country,
                                }),
                                  setErrors({ ...errors, nonSaudiCountry: "" }),
                                  setClicked(false);
                              }}
                            >
                              {country}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="input-fields" name="nonSaudiPersonalPhoto">
                    <label>
                      * Personal Photo <span> &nbsp;(Public View)</span>
                    </label>
                    <div
                      className={`file-input ${
                        errors.nonSaudiPersonalPhoto && "inputError"
                      }`}
                    >
                      <input
                        type="file"
                        onChange={(e) =>
                          setNonSaudiPersonalPhoto(e.target.files[0])
                        }
                      />
                      <div
                        className={`choose-part ${
                          errors.nonSaudiPersonalPhoto && "arrowError"
                        }`}
                      >
                        Choose
                      </div>
                      <div className="filename">
                        {state.nonSaudiPersonalPhoto
                          ? state.nonSaudiPersonalPhoto.name
                          : "No File Selected!"}
                      </div>
                    </div>
                    <div className="example">
                      PNG, JPEG, JPG (Max Size: 30mb)
                    </div>
                    <div className="example" style={{ marginTop: "10px" }}>
                      {errors.nonSaudiPersonalPhoto}
                    </div>
                  </div>
                  <div className="input-fields" name="nonSaudiJobTitle">
                    <label>
                      * Position / Job Title <span> &nbsp;(Public View)</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      value={state.nonSaudiJobTitle}
                      onChange={(event) =>
                        setNonSaudiJobTitle(event.target.value)
                      }
                      onFocus={() => {
                        setErrors({
                          ...errors,
                          nonSaudiJobTitle: "",
                        }),
                          setClicked(false);
                      }}
                      autoComplete="off"
                      className={errors.nonSaudiJobTitle && "inputError"}
                    />
                    <div className="example">{errors.nonSaudiJobTitle}</div>
                  </div>
                  <div className="input-fields" name="nonSaudiOrgName">
                    <label>
                      * Organization Name <span> &nbsp;(Public View)</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      value={state.nonSaudiOrgName}
                      onChange={(event) =>
                        setNonSaudiOrgName(event.target.value)
                      }
                      onFocus={() => {
                        setErrors({
                          ...errors,
                          nonSaudiOrgName: "",
                        }),
                          setClicked(false);
                      }}
                      autoComplete="off"
                      className={errors.nonSaudiOrgName && "inputError"}
                    />
                    <div className="example">{errors.nonSaudiOrgName}</div>
                  </div>
                  <div className="input-fields" name="nonSaudiOrgLogo">
                    <label>
                      * Organization Logo <span> &nbsp;(Public View)</span>
                    </label>
                    <div
                      className={`file-input ${
                        errors.nonSaudiOrgLogo && "inputError"
                      }`}
                    >
                      <input
                        type="file"
                        onChange={(e) => setNonSaudiOrgLogo(e.target.files[0])}
                      />
                      <div
                        className={`choose-part ${
                          errors.nonSaudiOrgLogo && "arrowError"
                        }`}
                      >
                        Choose
                      </div>
                      <div className="filename">
                        {state.nonSaudiOrgLogo
                          ? state.nonSaudiOrgLogo.name
                          : "No File Selected!"}
                      </div>
                    </div>
                    <div className="example">PNG, SVG (Max Size: 30mb)</div>
                    <div className="example" style={{ marginTop: "10px" }}>
                      {errors.nonSaudiOrgLogo}
                    </div>
                  </div>
                  <div
                    className="input-fields"
                    name="nonSaudiDelegateMobileNumber"
                  >
                    <label>* Mobile Number</label>
                    <br />
                    <input
                      type="text"
                      value={state.nonSaudiDelegateMobileNumber}
                      onChange={(event) =>
                        setNonSaudiDelegateMobileNumber(event.target.value)
                      }
                      onFocus={() => {
                        setErrors({
                          ...errors,
                          nonSaudiDelegateMobileNumber: "",
                        }),
                          setClicked(false);
                      }}
                      autoComplete="off"
                      className={
                        errors.nonSaudiDelegateMobileNumber && "inputError"
                      }
                    />
                    <div className="example">Include country code!</div>
                    <div className="example" style={{ marginTop: "10px" }}>
                      {errors.nonSaudiDelegateMobileNumber}
                    </div>
                  </div>
                  <div
                    className="input-fields"
                    name="nonSaudiDelegateOfficialEmail"
                  >
                    <label>* Official Email</label>
                    <br />
                    <input
                      type="text"
                      value={state.nonSaudiDelegateOfficialEmail}
                      onChange={(event) =>
                        setNonSaudiDelegateOfficialEmail(event.target.value)
                      }
                      onFocus={() => {
                        setErrors({
                          ...errors,
                          nonSaudiDelegateOfficialEmail: "",
                        }),
                          setClicked(false);
                      }}
                      autoComplete="off"
                      className={
                        errors.nonSaudiDelegateOfficialEmail && "inputError"
                      }
                    />
                    <div className="example">
                      {errors.nonSaudiDelegateOfficialEmail}
                    </div>
                  </div>
                  <div className="input-fields" name="nonSaudiWrittenStatement">
                    <label>Written Statement</label>
                    <br />
                    <textarea
                      value={state.nonSaudiWrittenStatement}
                      onChange={(event) =>
                        setNonSaudiWrittenStatement(event.target.value)
                      }
                      autoComplete="off"
                      className={
                        errors.nonSaudiWrittenStatement && "inputError"
                      }
                    ></textarea>
                    <div className="limitWords">
                      <p style={{ fontFamily: "BukraLight" }}>
                        Less than 3000 words
                      </p>
                      <p style={{ fontFamily: "BukraBold" }}>
                        {nonSaudiCountWords}/3000
                      </p>
                    </div>
                    <div className="example">
                      {errors.nonSaudiWrittenStatement}
                    </div>
                  </div>
                </div>
              )}
              <h1 className="title">IT Point of Contact Information</h1>
              <div className="input-fields" name="contactTitle">
                <label>* Title</label>
                <br />
                <input
                  type="text"
                  value={state.contactTitle}
                  onChange={(event) => setContactTitle(event.target.value)}
                  onFocus={() => {
                    setErrors({
                      ...errors,
                      contactTitle: "",
                    }),
                      setClicked(false);
                  }}
                  autoComplete="off"
                  className={errors.contactTitle && "inputError"}
                />
                <div className="example">Mr, Ms, Dr, Prof, etc.</div>
                <div className="example" style={{ marginTop: "10px" }}>
                  {errors.contactTitle}
                </div>
              </div>

              <div className="input-fields" name="contactFirstName">
                <label>* First Name</label>
                <br />
                <input
                  type="text"
                  value={state.contactFirstName}
                  onChange={(event) => setContactFirstName(event.target.value)}
                  onFocus={() => {
                    setErrors({
                      ...errors,
                      contactFirstName: "",
                    }),
                      setClicked(false);
                  }}
                  autoComplete="off"
                  className={errors.contactFirstName && "inputError"}
                />
                <div className="example">{errors.contactFirstName}</div>
              </div>

              <div className="input-fields" name="contactLastName">
                <label>* Last Name</label>
                <br />
                <input
                  type="text"
                  value={state.contactLastName}
                  onChange={(event) => setContactLastName(event.target.value)}
                  onFocus={() => {
                    setErrors({
                      ...errors,
                      contactLastName: "",
                    }),
                      setClicked(false);
                  }}
                  autoComplete="off"
                  className={errors.contactLastName && "inputError"}
                />
                <div className="example">{errors.contactLastName}</div>
              </div>

              <div className="input-fields" name="contactJobTitle">
                <label>* Position / Job Title</label>
                <br />
                <input
                  type="text"
                  value={state.contactJobTitle}
                  onChange={(event) => setContactJobTitle(event.target.value)}
                  onFocus={() => {
                    setErrors({
                      ...errors,
                      contactJobTitle: "",
                    }),
                      setClicked(false);
                  }}
                  autoComplete="off"
                  className={errors.contactJobTitle && "inputError"}
                />
                <div className="example">{errors.contactJobTitle}</div>
              </div>

              <div className="input-fields" name="contactMobileNumber">
                <label>* Mobile Number</label>
                <br />
                <input
                  type="text"
                  value={state.contactMobileNumber}
                  onChange={(event) =>
                    setContactMobileNumber(event.target.value)
                  }
                  onFocus={() => {
                    setErrors({
                      ...errors,
                      contactMobileNumber: "",
                    }),
                      setClicked(false);
                  }}
                  autoComplete="off"
                  className={errors.contactMobileNumber && "inputError"}
                />
                <div className="example">Include country code!</div>
                <div className="example" style={{ marginTop: "10px" }}>
                  {errors.contactMobileNumber}
                </div>
              </div>

              <div className="input-fields" name="contactOfficialEmail">
                <label>* Official Email</label>
                <br />
                <input
                  type="text"
                  value={state.contactOfficialEmail}
                  onChange={(event) =>
                    setContactOfficialEmail(event.target.value)
                  }
                  onFocus={() => {
                    setErrors({
                      ...errors,
                      contactOfficialEmail: "",
                    }),
                      setClicked(false);
                  }}
                  autoComplete="off"
                  className={errors.contactOfficialEmail && "inputError"}
                />
                <div className="example">{errors.contactOfficialEmail}</div>
              </div>
              <hr />
              <div className="submit_btn">
                <button
                  className={`${
                    submitted == "Submitted!" ? "formSubmitted" : ""
                  }`}
                  onClick={submitForm}
                  disabled={submitted == "Submitting"}
                >
                  {submitted == "Submitting" && (
                    <Loader
                      type="Circles"
                      color="#fff"
                      height={16}
                      width={16}
                    />
                  )}
                  {submitted == "Submitted!" && <img src={checkCircle} />}
                  &nbsp; {submitted}
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="registration-title-section">
              <div
                className="title-img"
                style={{ backgroundImage: `url(${linesImg})` }}
              >
                <div className="title-cube"></div>
              </div>
              <div className="registration-title">
                <p>Submission Confirmation</p>
              </div>
            </div>
            <div className="registration-confirm-section">
              <p>
                <img src={checkCircle} /> Thank you for submitting your
                registration form!
              </p>
              <div className="back-to-home">
                <StyledLink link="/">Back to Home Page</StyledLink>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Signup;

const StyledLink = styled(Link)`
  font-family: BukraBold;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  padding: 15px;
  text-decoration: none;
  transition: 0.5s;
  background-color: #00649c;
  display: inline-block;
  width: 270px;
  text-align: center;

  &:hover {
    background-color: #00496d;
  }
`;
