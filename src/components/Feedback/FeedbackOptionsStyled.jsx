import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Btn = styled.button`
    background: ${p => p.theme.colors.baseWhite};;
    border: 1px solid ${p => p.theme.colors.btnColor};
    border-radius: ${p => p.theme.radii.normal};
    margin-right: ${p => p.theme.space[2]}px;
    padding-top: ${p => p.theme.space[2]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
    font-size: ${p => p.theme.fontSizes.s};
    text-transform: uppercase;
    font-weight: ${p => p.theme.fontWeights.bold};
    cursor: pointer;
    &:hover {
    box-shadow: 0 0 5px 2px ${p => p.theme.colors.btnColor} inset;
}
`;

// export const Wrapp = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 300px; 
//     padding: ${p => p.theme.space[4]}px;
// `;

// export const Title = styled.h2`
//  text-align: center;
//  margin-bottom: ${p => p.theme.space[4]}px;
// `;