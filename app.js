function createTimeBlock(time, content="") {
  
    const timeRow = $("<div class='row align-items-center time-row'>");
    
    const colTime = $("<div class='col-2 d-flex justify-content-center time-col-time'>").text(time + ":00")
  
    
    const colTextArea = $("<div class='col-8 time-col-textarea'>")
    const textArea = $("<textarea cols='30' rows='2'id="+time+">").val(content)
  
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
    
  
 //local.storage of text input

 $('.container').on("click",".time-col-button", function() {

  let text=$(this).siblings(".time-col-textarea").children('textarea').val() 
  let key=$(this).siblings(".time-col-time").text()
  console.log(text);//return the text area
  localStorage.setItem(key,JSON.stringify(text));

 })
 setTimeout(function(){
  var keys=['9:00','10:00','11:00']
  var ids=[9,10,11]
  for (let index = 0; index < keys.length; index++) {
   let text = localStorage.getItem(keys[index]);
   $('#' +ids[index]).val(text)
  }
 },1000)
 
  
  
  
  
  
