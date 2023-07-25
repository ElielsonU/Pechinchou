import styled, { useTheme } from "styled-components";
import { Generic } from "@/components/models";

const StyledAdsCoupons = styled.section`
    display: flex;
    flex-direction: column;
    row-gap: 8px;

    .Header {
        padding: 10px 15px;
        border-radius: 12px;
        background-color: ${({theme}) => theme.colors.c1};
        align-items: center;
        display: flex;

        .Icon {
            background-color: ${({theme}) => theme.colors.c13};
            box-sizing: content-box;
            display: inline-block;
            padding: 8px;
            border-radius: 8px;
            margin-right: 10px;
            line-height: 10px;
            
            > img {
                width: 14px;
                height: 14px;
                filter: invert(${({theme}) => theme.filter.invert});
            }
        }
    }

    .Coupon {
        overflow: hidden;
        width: 100%;
        box-sizing: border-box;
        height: 101px;
        cursor: pointer;
        background: ${({theme}) => theme.colors.c1};
        border-radius: 6px;
        padding-left: 20px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        transition: scale 0.1s ease 0s;
        position: relative;
        text-align: left;
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-rows: repeat(3, 1fr);
        border: 0;

        :hover {
            scale: 1.025;
            background-color: ${({theme}) => theme.colors.c3};
        }

        ::before {
            content: "";
            width: 1px;
            height: 140px;
            box-sizing: border-box;
            position: absolute;
            left: -3px;
            top: -10px;
            border-left: 6px dashed ${({theme}) => theme.colors.c2};
        }

        ::after {
            content: "";
            z-index: 1px;
            width: 50px;
            height: 56px;
            box-sizing: border-box;
            position: absolute;
            right: -35px;
            border-radius: 100%;
            background-color: ${({theme}) => theme.colors.c2};
        }

        .Store {
            width: 50px;
            grid-row: 1/4;
            margin-right: 20px;
            border-radius: 8px;
            border: 1px solid ${({theme}) => theme.colors.c6};
        }

        #Up {
            align-self: flex-end;
        }

        #Down {
            align-self: flex-start;
            white-space: nowrap;
        }
    }
`

const AdsCoupons:React.FC = () => {
    const theme = useTheme()

    return (
        <StyledAdsCoupons>
                    <div className="Header">
                        <div className="Icon">
                            <img src="https://pechinchou.com.br/_next/static/media/IconCouponAds.9ddd1649.svg" alt="Coupouns" width={14} />
                        </div>
                        <Generic as={"h5"} font_size={theme.font_sizes.small} font_weight="500">
                            Cupons de descontos
                        </Generic>
                    </div>

                    <button className="Coupon">
                        <img src="https://pechinchou.com.br/_next/image?url=https%3A%2F%2Fadmin.pechinchou.com.br%2Fmedia%2Fimg%2Fstore%2F03%2F03%2FMagalu0.png.jpg&w=1200&q=75" alt="Magazine Luiza" className="Store"/>
                        <Generic color="#82888c" id="Up">Cupom Magazine Luiza</Generic>
                        <Generic color={theme.colors.c6} font_size={theme.font_sizes.medium} font_weight="900">R$ 20 Acima de R$ 999</Generic>
                        <Generic color="#82888c" id="Down">Categoria Eletrodomésticos</Generic>
                    </button>
                    
                    <button className="Coupon">
                        <img src="https://pechinchou.com.br/_next/image?url=https%3A%2F%2Fadmin.pechinchou.com.br%2Fmedia%2Fimg%2Fstore%2F03%2F03%2FCasas_bahia.png.jpg&w=1200&q=75" alt="Casas Bahia" className="Store"/>
                        <Generic color="#82888c" id="Up">Cupom Casas Bahia</Generic>
                        <Generic color={theme.colors.c6} font_size={theme.font_sizes.medium} font_weight="900">Até 20% OFF</Generic>
                        <Generic color="#82888c" id="Down">Categoria Eletrodomésticos</Generic>
                    </button>
                    
                    <button className="Coupon">
                        <img src="https://pechinchou.com.br/_next/image?url=https%3A%2F%2Fadmin.pechinchou.com.br%2Fmedia%2Fimg%2Fstore%2F11%2F06%2FRectangle_413_19.png&w=1200&q=75" alt="Natura" className="Store"/>
                        <Generic color="#82888c" id="Up">Cupom Natura</Generic>
                        <Generic color={theme.colors.c6} font_size={theme.font_sizes.medium} font_weight="900">10% OFF</Generic>
                        <Generic color="#82888c" id="Down">Categoria Moda, Beleza e Perfumaria</Generic>
                    </button>
                </StyledAdsCoupons>
    )
}

export default AdsCoupons