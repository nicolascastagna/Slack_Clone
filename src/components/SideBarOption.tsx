import React from 'react'
import styled from "styled-components";

interface Props {
    Icon: any;
    title: string;
    addChannelOption?: boolean;
  }

function SideBarOption({Icon, title, addChannelOption}: Props) {

    const addChannel = () => {
        
    }
    const selectChannel = () => {
        
    }

  return (
    <SidebarOptionContainer
    onClick={addChannelOption ? addChannel : selectChannel}
    >
        {Icon && <Icon fontSize="small" style={{padding: 10}} />}
        {Icon ? (
            <h3>{title}</h3>
        ) : (
            <SideBarOptionChannel>
                <span>#</span> {title}
            </SideBarOptionChannel>
        )}
    </SidebarOptionContainer>
  )
}

export default SideBarOption

const SidebarOptionContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;
    :hover {
        opacity: 0.9;
        background-color: "#340e36";
    }
    > h3 {
        font-weight: 500;
    }
    > h3 > span {
        padding: 15px;
    }
`;

const SideBarOptionChannel = styled.div``;