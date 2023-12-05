use std::fs;
fn main() {
    let file_path = "./input.txt";
    println!("In file {}", file_path);

    let contents = fs::read_to_string(file_path)
        .expect("Should have been able to read the file");

    println!("With text:\n{contents}");
    let mut seeds: Vec<i32> = vec![];
    println!("Hello, world!");
}
