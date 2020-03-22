import React from "react"
import links from './figma_urls_clean.json'

const titleStyle = {
    fontFamily: "'IBM Plex Sans', sans-serif",
    color: "#7f7f7f",
    fontSize: "20px",
    textAlign: "left",
}

const randomStyle = {
    fontFamily: "'IBM Plex Sans', sans-serif",
    backgroundColor: "#f1f1f1",
    border: "none",
    color: "#1805db",
    padding: "0px",
    textAlign: "right",
    textDecoration: "underline",
    display: "inline-block",
    fontSize: "20px",
    outline: "none",
    outlineOffset: "none"
}

const descTitle = {
    textAlign: "center",
    fontFamily: "'IBM Plex Sans', sans-serif",
    color: "#7f7f7f",
    fontSize: "16px"
}

const containerStyle = {
    height: "85vh",
    width: "100%",
    padding: "0px",
    margin: "0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundColor: "#f1f1f1"
}

const headerStyle = {
    width: "100%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: "16px"
}

const footerStyle = {
    width: "100%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: "16px"
}

const iframeStyle = {
    border: "none"
}

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: links[Math.floor(Math.random()*links.length)]
      };
    }
  
    render() {
      return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <div style={titleStyle}>Figma Today</div>
                <button style={randomStyle} onClick={() => this.setState({ count: links[Math.floor(Math.random()*links.length)] })}>Random Project</button>
            </div>
            <iframe
                style={iframeStyle}
                title={"figma-project"}
                id="figma-iframe"
                key={1}
                width="100%"
                height="100%"
                src={"https://www.figma.com/embed?embed_host=astra&url=" + this.state.count}
            />
            <div style={footerStyle}>
                <div style={descTitle}>Thousands of Figma projects from around the world.&nbsp;<a href="https://twitter.com/matthewjarvisw">@matthewjarvisw</a></div>
            </div>
        </div>
      );
    }
  }

  //<a style={randomStyle} href="http://figma.today/">Random Project</a>
// const App = () => {
//     return (
        // <div style={containerStyle}>
        //     <div style={headerStyle}>
        //         <div style={titleStyle}>Figma Today</div>
        //         <a style={randomStyle} href="http://figma.today/">Random Project</a>
        //     </div>
        //     <iframe
        //         style={iframeStyle}
        //         title={"figma-project"}
        //         id="figma-iframe"
        //         key={1}
        //         width="100%"
        //         height="100%"
        //         src={"https://www.figma.com/embed?embed_host=astra&url=" + links[Math.floor(Math.random()*links.length)]['links'][0]}
        //     />
        //     <div style={footerStyle}>
        //         <div style={descTitle}>Figma projects from around the world.&nbsp;<a href="https://twitter.com/matthewjarvisw">@matthewjarvisw</a></div>
        //     </div>
        // </div>
//     )
// }

//#E5E5E5
//{link}
//const pattern = /^(?:https:\/\/)?(?:www\.)?figma\.com\/file/
// const link = item['links'][0]
// const linkCheck = link.match(pattern)
// if (linkCheck !== null) {
//     return (
//         <Lazy>
            // <iframe
            //     style={{border: "none"}}
            //     title={"figma" + i}
            //     height="450"
            //     width="800"
            //     src={"https://www.figma.com/embed?embed_host=astra&url=" + link}
            // /> 
//         </Lazy>
//     )
// }