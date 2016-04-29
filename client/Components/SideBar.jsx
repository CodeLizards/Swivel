import React from 'react';

const SideBar = ({ courses, handleClass, handleHome }) => {
  let classes = courses.map((course) => (
   <div onClick={() => (handleClass(course)) }>{course.name}</div>
  ));

  return (
    <div className="col-md-3">
      <div onClick={ () => (handleHome()) }>Home</div>
      {classes}
    </div>
  );
};

export default SideBar;
