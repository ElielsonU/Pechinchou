import Link from "next/link";
import React, { Children, PropsWithChildren } from "react";
import styled from "styled-components";

interface StyledLinkProps {
    font_size?: string;
}

const StyledPLink = styled.a<StyledLinkProps>`
    color: ${({color}) => color?color:"inherit"};
    display: inline;
    font-weight: 500;
    text-decoration: none;
    font-size: ${({font_size}) => font_size};
    transition: opacity 200ms ease-in;
    :hover {
        opacity: 0.7;
    }
`

interface PLinkProps extends PropsWithChildren{
    href: string;
    color?: string;
    font_size?: string;
    className?: string;
}

const PLink: React.FC<PLinkProps> = ({
    href,
    color,
    font_size,
    className,
    children
}) => {
    return (
        <StyledPLink color={color} font_size={font_size} href={href} className={className}>
            {children}
        </StyledPLink>
    )
}

export default PLink