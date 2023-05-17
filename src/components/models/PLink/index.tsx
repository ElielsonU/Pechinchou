import Link from "next/link";
import React, { Children, PropsWithChildren } from "react";
import styled from "styled-components";

interface StyledLinkProps {
    font_size?: string;
}

const StyledPLink = styled.span<StyledLinkProps>`
    color: ${({color}) => color};
    display: inline;
    > a {
        vertical-align: middle;
        font-weight: 500;
        color: inherit;
        text-decoration: none;
        font-size: ${({font_size}) => font_size};
        :hover {
            opacity: 0.7;
        }
    }
`

interface PLinkProps extends PropsWithChildren{
    href: string;
    color?: string;
    font_size?: string;
}

const PLink: React.FC<PLinkProps> = ({
    href,
    color,
    font_size,
    children
}) => {
    return (
        <StyledPLink color={color} font_size={font_size}>
            <Link href={href} passHref>
                {children}
            </Link>
        </StyledPLink>
    )
}

export default PLink