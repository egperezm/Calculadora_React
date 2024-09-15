/*Desarrollador
Edwin Pérez 
09 de septiembre de 2024*/

/*Este controlador expone la API REST para la calculadora.*/

package com.example.calculator.controller;

import com.example.calculator.model.Operation;
import com.example.calculator.service.CalculatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RestController
@RequestMapping("/api/calculator")
@CrossOrigin(origins = "http://localhost:3000")
public class CalculatorController {

    @Autowired
    private CalculatorService calculatorService;

    @PostMapping("/calculate")
    public double calculate(@RequestParam double operand1,
                            @RequestParam double operand2,
                            @RequestParam String operator) {
        return calculatorService.calculate(operand1, operand2, operator);
    }

    @PostMapping("/history")
    public List<Operation> getHistory() {
        return calculatorService.getHistory();
    }
}
