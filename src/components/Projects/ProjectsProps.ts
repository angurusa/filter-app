export default interface ProjectsProps {
  options?: ProjectsOptions;
  data: ProjectsData;
}

// NOTE: This interface should include all and only data that is being passed into the component
export interface ProjectsData {}

// NODE: This interface should include all and only the options that change the style/behavior of the component
export interface ProjectsOptions {}

export interface ProjectData {
  projectName: string;
  platform: string;
  projectVersion: string;
  branchName: string;
  pid: number;
  jobID: string;
  creationDate: string;
  duration: number;
  result: string;
}