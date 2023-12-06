fn main() {
    println!("Hello, world!");
    let time: Vec<i64> = vec![53717880];
    let distance: Vec<i64> = vec![275118112151524];
    let mut solutions: Vec<i64> = vec![];
    let mut i:usize = 0;
    while i<distance.len() {
        solutions.push(computesolutions(time[i], distance[i]));
        i=i+1
    }
    println!("{:?}",solutions);
}

fn computesolutions(time:i64, distance:i64) -> i64{
    let mut button = 0;
    let mut winnings = 0;
    while button <= time {
        let mydistance = button*(time-button);
/*         println!("{}", mydistance); */
        button = button+1;
        if mydistance > distance {
            winnings = winnings+1;
        }
    }
    winnings

}