import Toast from "react-native-toast-message";

const displayError = (error: unknown, title?: string) => {
  const errorMessage = error instanceof Error ? error.toString() : undefined;
  Toast.show({
    type: "error",
    text1: title || "Something went wrong",
    text2: errorMessage,
    position: "bottom",
  });
};

const displayMessage = (title: string, subTitle?: string, type?: string) => {
  Toast.show({
    type: type || "success",
    text1: title,
    text2: subTitle,
    position: "bottom",
  });
};

export { displayError, displayMessage };
