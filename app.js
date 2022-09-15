function createTimeBlock(time, content="") {
  
    const timeRow = $("<div class='row align-items-center time-row'>");
    
    const colTime = $("<div class='col-2 d-flex justify-content-center time-col-time'>").text(time + ":00")
  
    
    const colTextArea = $("<div class='col-8 time-col-textarea'>")
    const textArea = $("<textarea cols='30' rows='2'>").val(content)
  
    const timeMoment = moment(time, "H");
    const currentTime = moment();
    const isPresent = (currentTime > timeMoment) && (currentTime < timeMoment.clone().add(1, 'hours'));
  
    // if time < currentTime -- past
    const isPast = timeMoment < currentTime;
  
    // if time > currentTime -- future
    const isFuture = timeMoment > currentTime;
    if(isPresent){
      textArea.addClass("present");
    }
    if(isPast){
      textArea.addClass('past');
    }
    if(isFuture){
      textArea.addClass('future');
    }
  
    colTextArea.append(textArea);
  
    const colButton = $("<div class='col-2 time-col-button'>")
    const button = $('<button type="submit" class="btn btn-primary">').text("Save")
    colButton.append(button);
  
    return timeRow.append(colTime, colTextArea, colButton);
  }
  
  $(function(){
    const currentTime = $("#currentDay");
    const container = $(".container")
  
    function startTimer(){
  
      setInterval(function(){
        currentTime.text(moment().format("YYYY-MM-DD HH:mm:ss"));
        

      }, 1000);
  
    }
   
    // when user lands on this app 
    // should see the current time -- ticking clock

startTimer();  
  
    for (let index = 9; index < 18; index++) {
  
      const previousNotes = "";
      const timeBlock = createTimeBlock(index, previousNotes);
      
      container.append(timeBlock);
      
    }  
  
  })
    
  
 // return timeRow.append(colTime, colTextArea, colButton);

 $('.btn').on("click", function() {

  let text=$(this).siblings(colTextArea).val() //return the text area
  localStorage.setItem('text',JSON.stringify(text));

 })
  
  
  
  
  
  // when user click on submit button,
  // should get the note written on the target timeblock
  // save the note to the storage (based on the time of the row)
  
  
  // scenarios
  // can the user edit past timeblocks?
  // can the user edit current timeblock?