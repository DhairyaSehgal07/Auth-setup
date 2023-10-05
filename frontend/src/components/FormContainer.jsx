import React from "react";

const FormContainer = ({ children }) => {
  return (
    <>
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {children}
        </div>
      </div>
    </>
  );
};

export default FormContainer;
