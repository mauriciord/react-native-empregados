import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    const { pickerTextStyle } = styles;

    return (
      <View>
        <CardSection>
          <Input
            label="Nome"
            placeholder="João"
            value={this.props.name}
            onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Tel."
            placeholder="+55 (19) 98765-1234"
            value={this.props.phone}
            onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={pickerTextStyle}>Dia da semana</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
          >
            <Picker.Item label="Segunda-Feira" value="" />
            <Picker.Item label="Terça-Feira" value="Terça-Feira" />
            <Picker.Item label="Quarta-Feira" value="Quarta-Feira" />
            <Picker.Item label="Quinta-Feira" value="Quinta-Feira" />
            <Picker.Item label="Sexta-Feira" value="Sexta-Feira" />
            <Picker.Item label="Sábado" value="Sábado" />
            <Picker.Item label="Domingo" value="Domingo" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Criar
          </Button>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeCreate
})(EmployeeCreate);
