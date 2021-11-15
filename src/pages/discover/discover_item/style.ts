import styled from 'styled-components';
export const DiscoverItem = styled.div `


    .card-all {
        justify-content: space-between;
        padding: 30px;
        display: flex;
        flex-wrap: wrap;
    }
    
    .card-item{

        
    }

    .ant-card {
        display:flex;
        flex-direction: column;
        justify-content:flex-start;
        width:300px;
        height:350px;
        border-radius:22px;
        border: 1px solid rgb(222, 224, 224);
        margin:10px 20px 10px;

            .card-info-area{
                width:100%;
                display:flex;
                flex-direction:row;
                justify-content: flex-start;
                align-items: flex-start;

                .card-logo{
                    vertical-align: middle;
                    border-style: none;
                    width:70px;
                    height:70px;
                }
                .card-info{
                    margin-left:15px;
                    .card-name{
                        font-size:18px;
                        font-weight: bold;
                    }
                    .ant-tag{
                        margin-top:10px;
                    }
                }
            }

            .card-introduce {
                margin:20px 10px 20px;
                font-size: 15px; 
                color:#808080;
            }
            .card-data-area {
                margin-top:10px;
                width: 100%;
                
                .card-data-item{
                    width:100%;
                    display:flex;
                    flex-direction: row;
                    justify-content:space-between;
                    align-items:center;
                    font-weight:400;
                    line-height:21px;
                    margin-bottom: 20px;

                    .card-data-info{
                        display:flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                            .data-name{
                                margin-left:10px;
                                font-size:15px;

                            }
                    }
                }
            }

            .card-foot{
                width: 90%;
                display:flex;
                margin:30px auto 5px;
                justify-content: space-between;
                align-items: center;

                .card-foot-button{
                    display:flex;
                    flex-direction:column;
                    justify-content:flex-start;
                    font-size:13px;

                }

            }

    }
`;

