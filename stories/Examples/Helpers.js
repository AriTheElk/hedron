import React from "react";
import { Container, Box } from "../../src";
import styled, { injectGlobal } from "styled-components";

injectGlobal`
    h1 {
        margin: 0
    }
`;

const StyledContainer = styled(Container)`
    border: solid 10px ${props => props.borderColor};
    background-color: ${props => props.bg}
`;

const StyledBox = styled(Box)`
    background: ${props => props.bg};
    color: ${props => props.color};
    outline: ${props => props.noOutline ? "none" : "solid 1px #fff"};
`;

export { StyledContainer, StyledBox };
