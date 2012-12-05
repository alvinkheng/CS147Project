var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var emoticons = {
    'excited': 'excited-01.png',
    'happy': 'happy-01.png',
    'neutral': 'neutral-01.png',
    'sad' : 'sad-01.png',
    'angry' : 'angry-01.png', 
    'angel' : 'angel-01.png',
    'devil' : 'devil-01.png', 
    'dissapoint' : 'dissapoint-01.png',
    'laugh' : 'laugh-01.png',
    'surprised' : 'surprised-01.png',
    '' : 'blank-01.png'
    };

function switchView(showId, hideId) {
    document.getElementById(showId).style.display = "block";
    document.getElementById(hideId).style.display = "none";
}

function presentPage(page, trans) {
    $.mobile.changePage(page, { transition: trans} );
}

function getDayName(day) {
    return days[day];
}

function getMonthName(month) {
    return months[month];
}

function getEmoticon(emotion) {
    return emoticons[emotion];
}

function simpleDate(date) {
    var today = new Date();
    var statusDate = " " + getMonthName(date.getMonth()) + " " + date.getDate() + ", " + date.getFullYear() + "";
    today = " " + getMonthName(today.getMonth()) + " " + today.getDate() + ", " + today.getFullYear() + "";
    
    if(statusDate==today) {
        return 'Today';
    } else if(statusDate+1==today) {
        return ' 1d ago';
    } else if(statusDate+2==today) {
        return ' 2d ago';
    } else if(statusDate+3==today) {
        return ' 3d ago';
    } else if(statusDate+4==today) {
        return ' 4d ago';
    } else if(statusDate+5==today) {
        return ' 5d ago';
    } else if(statusDate+6==today) {
        return ' 6d ago';
    } else {
        return statusDate;
    }
}

function getTime(hours, minutes) {
    var ampm;
    if (hours < 12) {
        ampm = 0;
        if (hours == 0) {
            hours = 12;
        }
    } else {
        ampm = 1;
        if (hours > 12) {
            hours -= 12;
        }
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    var result = "" + hours + ":" + minutes + ((ampm == 0) ? "AM" : "PM"); 
    return result;
}

function loadPersonalStatuses(data) {
    console.log("rendering page")
    drawGraphs('#personal-emotion-graph', data)
    drawLineGraph('#personal-time-graph', data)
    for (var i = 0; i < data.length; i++) {
        var curr = data[i];
        var date = new Date(curr.date);
        var emotion = curr.emotion;
        $('#feedList').append("<div class='feed_entries'>" + "<li class='emoticon'>"+"<img src='/imgs/" + getEmoticon(emotion) + "' />" + "</li>" + "<li class='entry_text'>" + curr.status + '<br> ' + "<span class='small'>" + curr.location + "<span class='date_format'>" + simpleDate(date) + "</span></li></div>");
        if (curr.image != '' && curr.image != 'none') {
            $('#feedList').append("<img src='" + curr.image + "' width=100%/>");
        }
    }
}

function loadGlobalStatuses(data) {
    $('#globalFeed').html('')
    
    $('#global-emotion-graph').html('')
    drawGraphs('#global-emotion-graph', data) 
    $('#global-time-graph').html('')
    drawLineGraph('#global-time-graph', data)
    
    for (var i = 0; i < data.length; i++) {
        var curr = data[i]
        var date = new Date(curr.date);
        var emotion = curr.emotion;
        $('#globalFeed').append("<div class='feed_entries'>" + "<li class='emoticon'>"+"<img src='/imgs/" + getEmoticon(emotion) + "' />" + "</li>" + "<li class='entry_text'>" + curr.status + '<br> ' + "<span class='small'>" + curr.location + "<span class='date_format'>" + simpleDate(date) + "</span></li></div>");
        if (curr.image != '' && curr.image != 'none') {
            $('#globalFeed').append("<img src='" + curr.image + "' width=100%/>");
        }    
    }
}

function loadUserInfo(data) {
    $('#saveBtn').click(function() {
        var prevPage = $.mobile.urlHistory.getPrev().url.substring(1);
        if (prevPage.indexOf('&') != -1) {
            prevPage = prevPage.substring(0, prevPage.indexOf('&'));
        }
        $('#backPage').val(prevPage)
        $('#settingsForm').submit()
    })
    $('#settingsName').val(data['name'])
    $('#settingsEmailField').val(data['email'])
    $('#settingsPass').val(data['password'])
    if(data['gender'] == 'f') {
        $('#radio-female').attr('checked', true).checkboxradio('refresh')
    } else {
        $('#radio-male').attr('checked', true).checkboxradio('refresh')
    }
    $('#flip-s').val(data['location']).slider('refresh')
    $('#privacy').val(data['privacy']).selectmenu('refresh')
}