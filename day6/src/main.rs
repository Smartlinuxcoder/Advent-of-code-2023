fn main() {
    let time = 53717880;
    let distance = 275118112151524;
    println!("{:?}", computesolutions(time, distance));
}

fn computesolutions(time: i64, distance: i64) -> i64 {
    let mut button = 0;
    let mut winnings = 0;
    while button <= time {
        let mydistance = button * (time - button);
    button = button + 1;    
        if mydistance > distance {
            winnings = winnings + 1;
        } else if winnings < 0 {
            break;
        }
    }
    winnings
}
