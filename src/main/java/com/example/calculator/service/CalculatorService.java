/*Desarrollador
Edwin Pérez 
09 de septiembre de 2024*/

/*contiene la lógica para realizar las operaciones aritméticas y gestionar el historial.*/

package com.example.calculator.service;

import com.example.calculator.model.Operation;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

@Service
public class CalculatorService {

    private final LinkedList<Operation> history = new LinkedList<>();

    public double calculate(double operand1, double operand2, String operator) {
        double result;
        switch (operator) {
            case "+":
                result = operand1 + operand2;
                break;
            case "-":
                result = operand1 - operand2;
                break;
            case "*":
                result = operand1 * operand2;
                break;
            case "/":
                if (operand2 == 0) {
                    throw new IllegalArgumentException("División por cero no permitida");
                }
                result = operand1 / operand2;
                break;
            default:
                throw new IllegalArgumentException("Operador no válido: " + operator);
        }

        addOperationToHistory(new Operation(operand1, operand2, operator, result));
        return result;
    }

    private void addOperationToHistory(Operation operation) {
        if (history.size() == 10) {
            history.removeFirst(); // Mantener solo las últimas 10 operaciones
        }
        history.add(operation);
    }

    public List<Operation> getHistory() {
        return history;
    }
}

