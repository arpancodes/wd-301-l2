import React from "react";

const formFields = [
  { id: 1, label: "First Name", value: "" },
  { id: 2, label: "Last Name", value: "" },
  { id: 3, label: "Email", value: "" },
];

export default function Form(props: { closeFormCB: () => void }) {
  const [formState, setFormState] = React.useState(formFields);
  const [newField, setNewField] = React.useState("");

  const clearFormCB = () => {
    setFormState(formState.map((field) => ({ ...field, value: "" })));
  };

  return (
    <div className="flex flex-col  items-center">
      <div className="flex w-full">
        <button
          onClick={props.closeFormCB}
          className="bg-blue-600 text-white rounded-lg p-2 m-2 w-full"
        >
          Close Form
        </button>
        <button
          onClick={clearFormCB}
          className="bg-gray-600 text-white rounded-lg p-2 m-2 w-full"
        >
          Clear Form
        </button>
      </div>
      {formState.map((field) => (
        <React.Fragment key={field.id}>
          <div className="flex w-full justify-between items-end">
            <span className="w-full text-lg px-2">{field.label}</span>
            <button
              className="bg-blue-600 text-white rounded-lg p-2 m-2"
              onClick={() =>
                setFormState(() => {
                  const newState = formState.filter(
                    (item) => item.id !== field.id
                  );
                  return newState;
                })
              }
            >
              Remove
            </button>
          </div>
          <input
            className="border-2 border-gray-200 rounded-lg p-2 m-2 w-full"
            type="text"
            value={field.value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormState(
                formState.map((item) => {
                  if (item.id === field.id) {
                    return { ...item, value: e.target.value };
                  }
                  return item;
                })
              )
            }
            placeholder={field.label}
          />
        </React.Fragment>
      ))}
      {/* Button to add Form Item */}
      <div className="flex w-full justify-between items-end">
        <input
          type="text"
          value={newField}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewField(e.target.value)
          }
          className="border-2 border-gray-200 rounded-lg p-2 m-2 w-full"
          placeholder="Add New Field"
        />

        <button
          className="bg-blue-600 text-white rounded-lg p-2 m-2 w-full"
          onClick={() => {
            setFormState([
              ...formState,
              { id: Number(new Date()), label: newField, value: "" },
            ]);
            setNewField("");
          }}
        >
          Add Field
        </button>
      </div>
    </div>
  );
}
