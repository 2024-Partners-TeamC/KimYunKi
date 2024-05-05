import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import styled from "styled-components";
import { auth } from "../firebase";
import { set, update } from "firebase/database";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";

export const errors = {
    "auth/email-already-in-use": "Email already exists",
    "auth/invalid-email": "Invalid email",
    "auth/weak-password": "Password is too weak",
    "auth/too-many-requests": "Too many requests",
    "auth/operation-not-allowed": "Operation not allowed",
    "auth/network-request-failed": "Network request failed",
};

export const Wrapper = styled.div`
    height: 100%;
    width: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px, 0px;
`;

export const Title = styled.h1`
    font-size: 42px;
`;

export const Form = styled.form`
    margin-top: 50px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;


export const Input = styled.input`
    width: 100%;
    padding: 10px 20px;
    border-radius: 50px;
    border: none;
    font-size: 16px;
    color: white;
    &[type="submit"] {
        cursor: pointer;
        background-color: #1d9bf0;
        &:hover {
            opacity: 0.8;
        }
    }
    box-sizing: border-box;
`;

export const Error = styled.span`
    font-weight: 600;
    color: tomato;
`;

export const Switcher = styled.span`
    margin-top: 20px;
    a {
        color: #1d9bf0;
    }
`;