import React from 'react'
import styled from "styled-components";
import FiberManualRecord from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import InsertComment from '@mui/icons-material/InsertComment';
import Inbox from '@mui/icons-material/Inbox';
import Drafts from '@mui/icons-material/Drafts';
import BookmarkBorder from '@mui/icons-material/BookmarkBorder';
import FileCopy from '@mui/icons-material/FileCopy';
import PeopleAlt from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SideBarOption from './SideBarOption';

function Sidebar() {
  return (
    <SideBarContainer>
        <SideBarHeader>
            <SideBarInfo>
                <h2>Team Work</h2>
                <h3>
                    <FiberManualRecord />
                    Nicolas Castagna</h3>
            </SideBarInfo>
            <CreateIcon />
        </SideBarHeader>
        <SideBarOption Icon={InsertComment} title="Threads"/>
        <SideBarOption Icon={Inbox} title="Mentions & reactions"/>
        <SideBarOption Icon={Drafts} title="Saved items"/>
        <SideBarOption Icon={BookmarkBorder} title="Channel browser"/>
        <SideBarOption Icon={PeopleAlt} title="People & user groups"/>
        <SideBarOption Icon={AppsIcon} title="Apps"/>
        <SideBarOption Icon={FileCopy} title="File browser"/>
        <SideBarOption Icon={ExpandLess} title="Show less"/>
        <hr />
        <SideBarOption Icon={ExpandMore} title="Channels"/>
        <hr />
        <SideBarOption Icon={AddIcon} addChannelOption title="Add Channel"/>
    </SideBarContainer>
  )
}

export default Sidebar

const SideBarContainer = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

    > hr {
      margin-top: 10px;
      margin-bottom: 10px;
      border: 1px solid #49274b;
    }
`;
const SideBarHeader = styled.div`
    display: flex;
    padding: 13px;
    border-bottom: 1px solid #49274b;

    > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;
const SideBarInfo = styled.div`
    flex: 1;
    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }
    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }
    > h3 > .MuiSvgIcon-root {
    color: green;
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
  }
`;