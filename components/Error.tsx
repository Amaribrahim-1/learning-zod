import React from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

type ErrorProps = {
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
};

export default function Error({ error }: ErrorProps) {
  const message = error?.message;

  return (
    <div className="min-h-[1.25rem]">
      {message && (
        <p className="text-sm font-medium text-rose-500">{String(message)}</p>
      )}
    </div>
  );
}
