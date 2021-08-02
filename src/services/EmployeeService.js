import axios from 'axios'

const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/v1/employees'


class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL)
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL +"/add",employee)
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL+"/"+employeeId)
    }

    updateEmployee(employeeId,employee){
        return axios.put(EMPLOYEE_API_BASE_URL+"/update/"+employeeId,employee)
    }

    deleteEmployee(id){
        return axios.delete(EMPLOYEE_API_BASE_URL+"/delete/"+id)
    }
}

export default new EmployeeService()