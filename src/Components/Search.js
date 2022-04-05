import React, { useState } from "react";
import { STUDENTS } from "../studentList";
// DO NOT CHANGE THIS FUNCTION, IT RETURNS TRUE OR FALSE ACCORDING TO GIVEN DATES
// joiningDate COMES FROM input-date, validityDate COMES FROM studentList,
export function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split("-");
  const [yyyy, mm, dd] = validityDate.split("-");
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return maxValid >= selected && maxValid >= today;
}

let found = "";
let dateOK = false;
function Search(props) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const onInputChange = (e) => {
    setName(e.target.value);
  };

  const onDateChange = (e) => {
    setDate(e.target.value);
  };

  const onButtonClick = () => {
    props.setOuted(false);
    props.setErrmessage("");

    found = STUDENTS.find((student, index) => {
      return student.name.toUpperCase() === name.toUpperCase();
    });

    if (found?.validityDate) {
      dateOK = checkValidity(date, found.validityDate);
    }

    setName("");
    setDate("");

    if (found?.name.toUpperCase() === name.toUpperCase() && dateOK) {
      //  console.log("2. durumdayız isim var, tarih doğru");
      if (!props.studentsAdded.includes(found.name)) {
        let addNew = [...props.studentsAdded, found.name];
        props.setStudentsAdded(addNew);
      }
      console.log(props.studentsAdded);
      return;
    } else if (found?.name.toUpperCase() === name.toUpperCase()) {
      // console.log("2. durumdayız isim var, tarih yanlış");
      props.setErrmessage(` ${found?.name}'s validity has expired`);
      return;
    } else {
      // console.log("3. durumdayız. isim yok.");
      props.setErrmessage(` ${name} is not a verified student`);
      return;
    }
  };

  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            onChange={onInputChange}
            value={name}
            id="studentName"
            data-testid="studentName"
            type="text"
            className="mr-30 mt-10"
            placeholder="Name..."
          />
        </div>
      </label>
      <label htmlFor="joiningDate">
        Joining Date:
        <div>
          <input
            onChange={onDateChange}
            value={date}
            id="joiningDate"
            data-testid="joiningDate"
            type="date"
            className="mr-30 mt-10"
          />
        </div>
      </label>

      <button
        onClick={() => onButtonClick()}
        type="submit"
        data-testid="addBtn"
        className="small mb-0"
        required
      >
        Add
      </button>
    </div>
  );
}

export default Search;
