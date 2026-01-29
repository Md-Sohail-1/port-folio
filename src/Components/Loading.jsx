const Loading = () => {
  const styles = {
    textAlign: "center",
    lineHeight: "60px",
    letterSpacing: "4px",
  }

  return (
    <div id='loading' style={{backgroundColor: "", height: "100vh", width: "100%", display: "grid", placeContent: "center", position: "absolute", zIndex: "100", top: "0px"}} >   
      <div role="status">
        <h1 className="loadingHeading" style={styles}>Sohail<br/>Portfolio</h1>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
export default Loading