interface Params {
  onLeft?: () => void;
  onRight?: () => void;
  onUp?: () => void;
  onDown?: () => void;
  onSlow?: () => void;
}

const identity = (x?: any) => x;

export type VoiceController = {
  setOnRight: (x: Function) => void;
  setOnLeft: (x: Function) => void;
  setOnUp: (x: Function) => void;
  setOnDown: (x: Function) => void;
  setOnSlow: (x: Function) => void;
};

export const initializeVoiceController = ({
  onLeft,
  onRight,
  onUp,
  onDown,
  onSlow,
}: Params): VoiceController => {
  let internalOnLeft = onLeft || identity;
  let internalOnRight = onRight || identity;
  let internalOnUp = onUp || identity;
  let internalOnDown = onDown || identity;
  let internalOnSlow = onSlow || identity;
  // Define global classes
  const SpeechRecognition =
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition;

  // Create speech recognition object.
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  // Set speech API event listeners.
  // recognition.onstart = console.log;
  // recognition.onerror = console.log;
  recognition.onresult = (event: any) => {
    const results = event.results;
    const speech = results[results.length - 1][0].transcript as string;
    const directions = speech.split(" ");
    const lastDirection = directions[directions.length - 1];
    console.log({ onSlow });
    if (lastDirection.includes("up")) {
      internalOnUp();
    } else;
    if (lastDirection.includes("down")) {
      internalOnDown();
    } else;
    if (lastDirection.includes("left")) {
      internalOnLeft();
    } else;
    if (lastDirection.includes("right")) {
      internalOnRight();
    }
    if (lastDirection.includes("slow")) {
      internalOnSlow();
    }
  };

  // Start speech recognition.
  recognition.start();

  return {
    setOnLeft: (newFunc: () => void) => {
      internalOnLeft = newFunc;
    },
    setOnRight: (newFunc: () => void) => {
      internalOnRight = newFunc;
    },
    setOnUp: (newFunc: () => void) => {
      internalOnUp = newFunc;
    },
    setOnDown: (newFunc: () => void) => {
      internalOnDown = newFunc;
    },
    setOnSlow: (newFunc: () => void) => {
      internalOnSlow = newFunc;
    },
  };
};
