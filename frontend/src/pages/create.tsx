import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import api from "../services/api";
import { useRouter } from "next/router";
import Button from "@/UI/Button";

type Question = {
  text: string;
  type: "BOOLEAN" | "INPUT" | "CHECKBOX";
};

type FormData = {
  title: string;
  type: string;
  questions: Question[];
};

export default function CreateQuestionPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: "",
      questions: [{ text: "", type: "BOOLEAN" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit = async (data: FormData) => {
    try {
      const payload = {
        title: data.title,
        questions: data.questions,
      };

      await api.post("/quizzes", payload);

      alert("Create quiz");
      reset();
    } catch (err) {
      alert("Error, try again");
      console.error(err);
    }
  };

  const handleShow = () => {
    router.push("/quizzes");
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="max-w-[600px] mx-auto flex flex-col items-center justify-center min-h-screen overflow-y-auto p-5">
      <form onSubmit={handleSubmit(onSubmit)} className="mb-5 w-full">
        <div className="flex flex-col items-center justify-center mb-5">
          <label className="text-xl mb-2 font-bold">Quiz Title</label>

          <input
            className="p-2 border border-gray-300 rounded-md w-full"
            {...register("title", { required: "Enter the quiz title" })}
            placeholder="Quiz Title"
          />

          {errors.title && (
            <p style={{ color: "red" }}>{errors.title.message}</p>
          )}
        </div>

        {fields.map((field, index) => (
          <div key={field.id} className="mb-4 border p-3 rounded">
            <label className="text-xl font-medium">Question: </label>
            <input
              placeholder={`Question #${index + 1}`}
              className="p-2 border border-gray-300 rounded w-full mb-2 mt-2"
              {...register(`questions.${index}.text`, {
                required: "Enter question text",
              })}
            />

            <label className="text-xl font-medium">Type: </label>
            <select
              {...register(`questions.${index}.type`)}
              className="border p-1 rounded w-full"
            >
              <option value="BOOLEAN">Boolean</option>
              <option value="INPUT">Input</option>
              <option value="CHECKBOX">Checkbox</option>
            </select>

            <div className="mt-2">
              <Button handleClick={() => remove(index)} title="Remove" red />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={() => append({ text: "", type: "BOOLEAN" })}
          className="mb-5 text-blue-500"
        >
          Add Question
        </button>

        <Button title="Create Quiz" type="submit" />
      </form>

      <Button title="Show quizzes" handleClick={handleShow} border />

      <div className="mt-5 w-full">
        <Button blue title="Back" handleClick={handleBack} />
      </div>
    </div>
  );
}
