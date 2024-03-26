// types.ts

export interface Course {
    id: string;
    course_name: string;
    course_fee: string;
    country: string;
    level_name: string;
    uni_logo: string;
    university: string;
    // Add other properties as needed
  }
  
  export interface ApiResponse {
    current_page: number;
    data: {
      data: Course[]; // Change data to directly contain an array of Course
    }
  }
  