export interface ICourseLevelsResponse {
    status: string;
    message: string;
    data: ICourseLevel[]
}

export interface ICourseLevelsRequest {
    status: number
}

export type ICourseLevel = {
    id: number;
    level: string;
    status: number;
    created_by: number;
    created_at: string;
}