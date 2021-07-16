import { AuthenticateProvider } from "./Authentication";
import { CoursesProvider } from "./Courses";
import { UsersProvider } from "./Users";
import { CourseProvider } from "./Course";
import { ClassProvider } from "./Class";
import { AllUsersProvider } from "./AllUsers";
const Providers = ({ children }) => {
  return (
    <>
      <AuthenticateProvider>
        <CoursesProvider>
          <ClassProvider>
            <AllUsersProvider>
              <CourseProvider>
                <UsersProvider>{children}</UsersProvider>
              </CourseProvider>
            </AllUsersProvider>
          </ClassProvider>
        </CoursesProvider>
      </AuthenticateProvider>
    </>
  );
};

export default Providers;
