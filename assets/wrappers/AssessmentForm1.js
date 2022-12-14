import styled from "styled-components";

const Wrappers = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
  }
  .heading {
    font-size: 3rem;
  }
  .form-section {
    margin-left: 4rem;
    width: 50%;
    /* background-color: lightcoral; */
  }
  .img-section {
  }
  div div {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 0.6rem;
  }
  .first-row {
    display: flex;
    flex-direction: row;
  }
  input,
  select {
    padding: 1rem;
  }
  .two-row {
    width: 40vh;
    margin-right: 2rem;
  }
  label {
    position: absolute;
    top: -0.6rem;
    left: 1.5rem;
    background-color: white;
  }
  .two-input {
    display: flex;
    flex-direction: row;
  }
  .input:first-child {
    padding-right: 2rem;
  }
  .input {
    flex-grow: 1;
  }
  .one-input {
    width: calc(100% + 2rem);
  }
  .three-input {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .three-input .input {
    width: 100px;
  }
  .img-section {
    background-color: #f9ed69;
    width: 40%;
    background-image: url("./WealthifyLogo.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 25rem;
  }
  /* terms and condition section  */
  .bottom {
    padding-bottom: 2rem;
    background-color: var(--gray-light);
  }
  .terms-container {
    padding-top: 2rem;
  }

  li {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 90%;
    margin: 0 auto;
    margin-top: 4rem;
    margin-bottom: 4rem;

    /* margin-left: 2.5rem; */
  }
  footer div:first-child::after {
    content: "";
    position: absolute;
    top: 2rem;
    left: 10rem;
    height: 2px;
    width: 60vw;
    background: black;
  }
  .next {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  p {
    margin-left: 1rem;
  }
  .agree-btn {
    display: flex;
    flex-direction: row;
  }
  select {
    background-color: transparent;
  }

  @media (max-width: 480px) {
    .heading {
      font-size: 2rem;
    }
    .container {
      display: flex;
      flex-direction: column;
    }
    .img-section {
    }
    input {
      width: 300px;
      margin-left: -1.6rem;
    }
    input[type="checkbox"] {
      width: 20px;
    }
    select {
      width: 300px;
      margin-left: -1.6rem;
    }

    .two-input {
      display: flex;
      flex-wrap: wrap;
    }

    footer div:first-child::after {
      width: 50px;
    }
  }
`;
export default Wrappers;
