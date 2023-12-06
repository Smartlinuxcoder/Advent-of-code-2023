fn main() {
    println!("Hello, world!");
    let time: Vec<i32> = vec![53, 71, 78, 80];
    let distance: Vec<i32> = vec![275,1181,1215,1524];
    let mut solutions: Vec<i32> = vec![];
    let mut i:usize = 0;
    while i<distance.len() {
        solutions.push(computesolutions(time[i], distance[i]));
        i=i+1
    }
    println!("{:?}",solutions);
}

fn computesolutions(time:i32, distance:i32) -> i32{
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