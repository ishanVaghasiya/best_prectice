import { Button } from "@mui/material";
import { useState } from "react";
import "./App.css";
import MyModal from "./components/myModal";

const dummyBox = [
  {
    title: "1",
    text: "111 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electro",
  },
  {
    title: "2",
    text: "222 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has surv",
  },
  {
    title: "3",
    text: "333 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has surv",
  },
];

function App() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  return (
    <>
      <h1>Open Modal</h1>
      {!!dummyBox &&
        dummyBox.map((value, index) => {
          return (
            <>
              <Button
                key={`modal-${index}`}
                variant="outlined"
                onClick={() => {
                  setOpen(true);
                  setData(value.text);
                }}
              >
                {`Open dialog ${value.title}`}
              </Button>
            </>
          );
        })}
      {open && (
        <MyModal open={open} onClose={() => setOpen(false)}>
          {data}
        </MyModal>
      )}
    </>
  );
}

export default App;
