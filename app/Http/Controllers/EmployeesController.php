<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use Exception;
use App\Models\Employee;

class EmployeesController extends Controller
{
    //Get Employee List from DB
    public function getEmployeeList()
    {
        try {
            $employees = Employee::orderBy('id','DESC')->get();
            return response()->json($employees);
            
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    //get individual employee detail
    public function getEmployeeDetails(Request $request)
    {
        try {
            $employeeData = Employee::findOrFail($request->employeeId);
            return response()->json($employeeData);
            
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    //Updateing employee data
    public function updateEmployeeData(Request $request)
    {
        try {
            // dd($request->all());
            Employee::where('id',$request->employeeId)->update([
                'emp_name' => $request->employeeName,
                'salary' => $request->employeeSalary,
            ]);
            
            return response()->json([
                'emp_name' => $request->employeeName,
                'salary' => $request->employeeSalary,
            ]);

        } catch (Exception $e) {
            Log::error($e);
        }
    }

    //delete employee
    public function destroy(Employee $employee) //directly use Employee, laravel will figure out the id and automatic delete it
    {
        try {
            $employee->delete();
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    //create employee
    public function createEmployeeData(Request $request)
    {
        try {
            Employee::create([
                'emp_name'=>$request->employeeName,
                'salary'=>$request->employeeSalary,
            ]);
        } catch (Exception $e) {
            Log::error($e);
        }
    }
}