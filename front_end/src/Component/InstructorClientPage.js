import React from "react";
import styled from "styled-components";
import { NavLink, Link, Route, withRouter } from "react-router-dom";
import Register from "./Register"



const InstructorClientChoice = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 13%;
`;

const Button = styled.button`
    box-shadow: 0px 1px 0px 0px #f0f7fa;
    background: linear-gradient(
        180deg,
        rgba(183, 156, 237, 1) 0%,
        rgba(116, 99, 185, 1) 60%
    );
    background-color: rgb(183, 156, 237);
    border-radius: 6px;
    border: 1px solid #7161ef;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 45px 45px;
    text-decoration: none;
    text-shadow: 0px -1px 0px #5b6178;

    &:hover {
        background: linear-gradient(
            180deg,
            rgba(116, 99, 185, 1) 0%,
            rgba(183, 156, 237, 1) 60%
        );
        background-color: rgb(183, 156, 237);
    }
`;

export default function InstructorClient() {
    return (
        <InstructorClientChoice>
            <NavLink>
                <Button>Instructor</Button>
            </NavLink>
           
            <NavLink to="/clientlogin">
                <Button>Client</Button>
            </NavLink>
           
        </InstructorClientChoice>
    );
}
