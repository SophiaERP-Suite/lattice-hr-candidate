const BaseURL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");


export const clockOut = async (data: FormData, employerId: number) => {

  const res = await fetch(`${BaseURL}/clock/${employerId}/clock-out`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: data
  });

  if (!res.ok) {
    throw new Error("Failed to clock-out");
  }

  return res.json();
};

export const clockIn = async (data: FormData, employerId: number) => {

  const res = await fetch(`${BaseURL}/clock/${employerId}/clock-in`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: data
  });

  if (!res.ok) {
    throw new Error("Failed to clock-in");
  }

  return res.json();
};


export const getClockStatus = async (id: number) => {
  const response = await fetch(`${BaseURL}/clock/${id}/clock-status`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const getMyAttendanceSummaryByEmployerId = async (employerId: number, month: number, year: number) => {
  const response = await fetch(`${BaseURL}/clock/${month}/${year}/${employerId}/employeeAttendanceSummary`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const getMyAttendanceByEmployerId = async (
  employerId: number,
  pageNumber: number = 1,
  pageSize: number = 10
) => {
  const response = await fetch(
    `${BaseURL}/clock/${pageNumber}/${pageSize}/${employerId}/employeeAttendance`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch attendance");
  }

  return response.json();
};

export const getEmployerAddressEmployerId = async (
  employerId: number,
) => {
  const response = await fetch(
    `${BaseURL}/employers/${employerId}/byEmployerId`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch details");
  }

  return response.json();
};

// export const getInductionSectionsByLevelId = async (id: number) => {
//   const response = await fetch(`${BaseURL}/induction/level/${id}/sections`, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return response.json();
// };

// export const getInductionSectionsBySectionId = async (id: number) => {
//   const response = await fetch(`${BaseURL}/induction/${id}/section`, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return response.json();
// };

// export const getInductionItemsBySection = async (sectionId: number) => {
//   const response = await fetch(`${BaseURL}/induction-items/section/${sectionId}/items`, {
//     method: "GET",
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   if (!response.ok) throw new Error(`Failed to fetch items (${response.status})`);
//   return response.json();
// };


// export const completeAssignment = async (assignmentId: number) => {
//   const res = await fetch(`${BaseURL}/induction-assignment/complete/${assignmentId}`, {
//     method: "PUT",
//     headers: { Authorization: `Bearer ${token}` },
//   });

//   const data = await res.json();

//   console.log("res ttt", data);

//   return data;
// };

// export const completeInductionItem = async (data: {
//   assignmentId: number;
//   inductionItemId: number;
//   quizScore?: number;
//   quizPassed?: boolean;
//   signatureName?: string;
// }) => {

//   const formData = new FormData();

//   formData.append("assignmentId", String(data.assignmentId));
//   formData.append("inductionItemId", String(data.inductionItemId));

//   if (data.quizScore !== undefined)
//     formData.append("quizScore", String(data.quizScore));

//   if (data.quizPassed !== undefined)
//     formData.append("quizPassed", String(data.quizPassed));


//   const res = await fetch(`${BaseURL}/induction-completion/complete-item`, {
//     method: "POST",
//     headers: { Authorization: `Bearer ${token}` },
//     body: formData
//   });

//   if (!res.ok) {
//     throw new Error("Failed to complete induction item");
//   }

//   return res.json();
// };


// export const submitQuizAnswers = async (data: {
//   inductionItemId: number;
//   attemptNumber: number;
//   answers: {
//     inductionQuizQuestionId: number;
//     selectedOption: string;
//   }[];
// }) => {
//   const res = await fetch(`${BaseURL}/induction-completion/quiz-answers`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(data),
//   });

//   if (!res.ok) throw new Error("Failed to submit quiz answers");

//   return await res.json();
// };


// export const submitChecklistResponse = async (data: {
//   inductionChecklistLineId: number;
//   isTicked: boolean;
// }) => {

//   const formData = new FormData();

//   formData.append("inductionChecklistLineId", String(data.inductionChecklistLineId));
//   formData.append("isTicked", String(data.isTicked));

//   const res = await fetch(`${BaseURL}/induction-completion/checklist-response`, {
//     method: "POST",
//     headers: { Authorization: `Bearer ${token}` },
//     body: formData
//   });

//   if (!res.ok) {
//     throw new Error("Failed to update checklist");
//   }

//   return res.json();
// };

// export const getCompletedItems = async (assignmentId: number) => {

//   const res = await fetch(
//     `${BaseURL}/induction-completion/completed-items/${assignmentId}`,
//     {
//       method: "GET",
//       headers: { Authorization: `Bearer ${token}` },
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to load progress");
//   }

//   return res.json();
// };