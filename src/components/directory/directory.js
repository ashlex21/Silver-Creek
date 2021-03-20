import React from "react";
import MenuItem from "../menu-item/menu-item";
import {createStructuredSelector} from 'reselect';
import selectDirectorySections from '../../redux/directory/directory.selectors'
import {connect} from 'react-redux'
import "./directory.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})



export default connect(mapStateToProps)(Directory);


// i converted Directory from a calss component to functional component as we moved our state code to redux we don't need a class component!!!!