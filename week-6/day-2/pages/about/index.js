import React from "react";

class About extends React.Component {

  state = {  } 
  render() { 
    return (
      <div>{this.props.title}</div>
    );
  }
}

// export async function getServerSideProps(context) {
//   console.log("getServerSideProps")
//   return {
//     props: {
//       title: "Hakkımızda"
//     }, // will be passed to the page component as props
//   }
// }

export default About;