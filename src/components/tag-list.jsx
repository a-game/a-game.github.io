import React from "react";
import { ListLink } from "./link";
import style from "./tag-list.module.scss";
import PropTypes from "prop-types";

const TagList = ({ tags }) => (
  <ul className={style.tags}>
    {tags.map((tag, index) => (
      <ListLink key={index} to={tag.url}>
        {tag.label}
      </ListLink>
    ))}
  </ul>
);
export default TagList;

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
};
