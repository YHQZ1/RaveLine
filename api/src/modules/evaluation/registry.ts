import { ContentType, EvaluationResult } from "../../types/evaluation";
import { evaluateText } from "./text";
import { evaluateImage } from "./image";
import { evaluateVideo } from "./video";

type Evaluator = (content: unknown) => EvaluationResult;

export const evaluators: Record<ContentType, Evaluator> = {
  text: evaluateText,
  image: evaluateImage,
  video: evaluateVideo,
};
