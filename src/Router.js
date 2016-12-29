import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Autenticação" />
      </Scene>

      <Scene key="main">
        <Scene
          onRight={() => Actions.employeeCreate()}
          rightTitle="+"
          key="employeList"
          component={EmployeeList}
          title="Lista de empregados"
          initial
        />
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Criar empregado"
        />
        <Scene
          key="employeeEdit"
          component={EmployeeEdit}
          title="Editar empregado"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
