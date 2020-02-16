import React from 'react';
import ContactsManagement from './ContactsManagement/ContactsManagement';
import App from './App';
import PeopleList from './People/PeopleList';
import Profile from './Profile/Profile';
import Birthdays from './Birthdays/Birthdays';
import MemberAnalysis from './MemberAnalysis/MemberAnalysis';
import SystemManagementPage from './SystemManagement/SystemManagementPage';
import Cities from './SystemManagement/Cities/Cities';
import AddCity from './SystemManagement/Cities/AddCity';
import States from './SystemManagement/States/States';
import AddStates from './SystemManagement/States/AddState';
import AddCountry from './SystemManagement/Country/AddCountry';
import Country from './SystemManagement/Country/Country';
import Locale from './SystemManagement/Locale';
import SermonTime from './SystemManagement/SermonTime/SermonTime';
import SermonProgramItems from './SystemManagement/SermonProgramItems/SermonProgramItems';
import Organization from './SystemManagement/Staffing/Organizations/Organization';
import AddOrganization from './SystemManagement/Staffing/Organizations/AddOrganization';
import Department from './SystemManagement/Staffing/Departments/Department';
import EmployeeCategory from './SystemManagement/Staffing/EmployeeCategory/EmployeeCategory';
import Positions from './SystemManagement/Staffing/Positions/Positions';
import MaritalStatus from './SystemManagement/Staffing/MaritalStatus/MaritalStatus';
import Banks from './SystemManagement/Finances/Banks/Banks';
import MonthlyBills from './SystemManagement/Finances/MonthlyBills/MonthlyBills';
import Vendors from './SystemManagement/Finances/Vendors/Vendors';
import PaymentMode from './SystemManagement/Finances/PaymentMode/PaymentMode';
import PaymentCategory from './SystemManagement/Finances/PaymentCategory/PaymentCategory';
import GroupEventDescriptions from './SystemManagement/Programs/GroupEventDescriptions/GroupEventDescriptions';
import MemberTypes from './SystemManagement/Programs/MemberTypes/MemberTypes';
import Pastors from './SystemManagement/Staffing/Pastors/Pastors';

const routes = [
	{ path: '/', exact: true, name: 'App', component: App },
	{ path: '/App', exact: false, name: 'App', 
	component: App },
	{ path: '/ContactsManagement', exact: false, name: 'ContactsManagement', 
	component: ContactsManagement },
	{ path: '/PeopleList', exact: false, name: 'PeopleList', 
	component: PeopleList },
	{ path: '/Profile', exact: false, name: 'Profile', 
	component: Profile },
	{ path: '/Birthdays', exact: false, name: 'Birthdays', 
	component: Birthdays },
	{ path: '/MemberAnalysis', exact: false, name: 'MemberAnalysis', 
	component: MemberAnalysis },
	{ path: '/SystemManagementPage', exact: false, name: 'SystemManagementPage', 
	component: SystemManagementPage },
	{ path: '/Cities', exact: false, name: 'Cities', 
	component: Cities },
	{ path: '/AddCity', exact: false, name: 'AddCity', 
	component: AddCity },
	{ path: '/States', exact: false, name: 'States', 
	component: States },
	{ path: '/AddStates', exact: false, name: 'AddStates', 
	component: AddStates },
	{ path: '/Country', exact: false, name: 'Country', 
	component: Country },
	{ path: '/AddCountry', exact: false, name: 'AddCountry', 
	component: AddCountry },
	{ path: '/Locale', exact: false, name: 'Locale', 
	component: Locale },
	{ path: '/SermonTime', exact: false, name: 'SermonTime', 
	component: SermonTime },
	{ path: '/SermonProgramItems', exact: false, name: 'SermonProgramItems', 
	component: SermonProgramItems },
	{ path: '/Organization', exact: false, name: 'Organization', 
	component: Organization },
	{ path: '/AddOrganization', exact: false, name: 'AddOrganization', 
	component: AddOrganization },
	{ path: '/Pastors', exact: false, name: 'Pastors', 
	component: Pastors },
	{ path: '/Department', exact: false, name: 'Department', 
	component: Department },
	{ path: '/EmployeeCategory', exact: false, name: 'EmployeeCategory', 
	component: EmployeeCategory },
	{ path: '/Positions', exact: false, name: 'Positions', 
	component: Positions },
	{ path: '/MaritalStatus', exact: false, name: 'MaritalStatus', 
	component: MaritalStatus },
	{ path: '/Banks', exact: false, name: 'Banks', 
	component: Banks },
	{ path: '/MonthlyBills', exact: false, name: 'MonthlyBills', 
	component: MonthlyBills },
	{ path: '/Vendors', exact: false, name: 'Vendors', 
	component: Vendors },
	{ path: '/PaymentMode', exact: false, name: 'PaymentMode', 
	component: PaymentMode },
	{ path: '/PaymentCategory', exact: false, name: 'PaymentCategory', 
	component: PaymentCategory },
	{ path: '/GroupEventDescriptions', exact: false, name: 'GroupEventDescriptions', 
	component: GroupEventDescriptions },
	{ path: '/MemberTypes', exact: false, name: 'MemberTypes', 
	component: MemberTypes },
	{ path: '/Pastors', exact: false, name: 'Pastors', 
	component: Pastors },
];

export default routes;