section .data
    time dq 53717880
    distance dq 275118112151524
    format db "%ld", 0

section .text
    global _start

_start:
    mov rdi, time
    mov rsi, distance
    call computesolutions

    ; The result is now in rax

    ; Print the result
    mov rdi, format
    mov rax, 1          ; syscall: write
    mov rsi, rax        ; file descriptor: stdout
    mov rdx, 8          ; number of bytes to write
    syscall

    ; Exit the program
    mov rax, 60         ; syscall: exit
    xor rdi, rdi        ; status: 0
    syscall

computesolutions:
    ; Function prologue
    push rbp
    mov rbp, rsp

    ; Local variable: winnings (initialized to 0)
    mov qword [rbp-8], 0

    ; Loop over buttons
    mov rcx, 0
    jmp loop_condition

loop_start:
    ; Calculate remaining_time = time - button
    sub rdx, rcx

    ; Calculate mydistance = button * remaining_time
    imul rax, rcx, rdx

    ; Compare mydistance with distance
    cmp rax, rsi
    jle not_greater

    ; Increment winnings if mydistance > distance
    inc qword [rbp-8]
    jmp loop_condition

not_greater:
    ; Break if winnings < 0
    cmp qword [rbp-8], 0
    jl loop_exit

loop_condition:
    ; Check if button <= time / 2
    cmp rcx, rdi
    jbe loop_start

loop_exit:
    ; Move the result to rax before returning
    mov rax, qword [rbp-8]

    ; Function epilogue
    mov rsp, rbp
    pop rbp
    ret
