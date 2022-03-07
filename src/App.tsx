import React from "react";
import AppContainer from "./AppContainer";
import Form from "./components/Form";
import Header from "./Header";

function App() {
  const [page, setPage] = React.useState("HOME");
  const openForm = () => setPage("FORM");
  const closeForm = () => setPage("HOME");
  return (
    <AppContainer>
      <div className="p-4 mx-auto bg-white shadow-lg rounded-xl">
        <Header
          title={`Welcome to Lesson ${
            4 + 2
          } of #react-typescript with #tailwindcss`}
        />
        {page === "HOME" ? (
          <button
            onClick={openForm}
            className="bg-blue-600 text-white rounded-lg p-2 m-2 w-full"
          >
            Go to Form
          </button>
        ) : (
          <Form closeFormCB={closeForm} />
        )}
      </div>
    </AppContainer>
  );
}

export default App;
