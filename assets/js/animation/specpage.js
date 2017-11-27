/*************************************************************
 *
 * Filename:spec-page.js
 * Author: yimuchen
 * Description: Javascript for user interactive elements in specs page
 * Javascripts is used for handling the CSS class toggling, while the
 * CSS found in the _sass/_specs.scss actually defines the dynamic
 * behaviour.
 *
*************************************************************/

// Class toggling for experience sections.
$(document).ready(function() {
  $(".exp_header").on("click", function() {
    if ($(this).siblings(".exp_desc").hasClass("shown")) {
      $(this).siblings(".exp_desc").removeClass("shown");
    } else {
      $(this).siblings(".exp_desc").addClass("shown");
    }

    if ($(this).hasClass("shown")) {
      $(this).removeClass("shown");
    } else {
      $(this).addClass("shown");
    }
  });
});

// Class toggling for checkboxes in tools section
$(document).ready(function() {
  $('input[type="checkbox"]').on('change', function() {
    $('input[type="checkbox"]').not(this).prop('checked', false);
    var item_state = $(this).prop('checked');
    var item_change = $(this).attr('id') + '_detail';
    $('div[id$=_detail]').each(function() {
      if ($(this).attr('id') != item_change) {
        $(this).removeClass("shown");
      } else {
        if (item_state) {
          $(this).addClass("shown");
        } else {
          $(this).removeClass("shown");
        }
      }
    });
  });
});

// Force-clearing all checkboxes on document load.
$(document).ready(function() {
  $(':checkbox:checked').prop('checked', false);
});


// Random Facts display
function GetRandomFactId() {
  var fact_count = document.querySelectorAll('.fact_container .fact_item').length;
  var fact_display = 0;
  while (fact_display == 0) {
    fact_display = Math.floor((Math.random() * fact_count) + 1);
    if ($('[id=fact_item_' + fact_display + ']').hasClass('shown')) {
      fact_display = 0;
    }
  }
  return fact_display;
}


// Showing a random fact
function ShowRandom() {
  var new_display = GetRandomFactId();
  $('[id^=fact_item_]').each(function() {
    $(this).removeClass('shown');
  });
  $('[id^=fact_item_' + new_display + ']').addClass('shown');
}

// Showing random on startup.
$(document).ready( ShowRandom );

// Showing random every n milliseconds
window.setInterval( ShowRandom, 30*1000 );


// Toggling > < section of right navigation bar.
$(document).ready(function() {
  $("#spec-nav-button").on("click", function() {
    var el = $(this);
    el.text() == el.data("text-swap") ?
      el.text(el.data("text-original")) :
      el.text(el.data("text-swap"));
    el.text() == el.data("text-swap") ?
      $('[id=spec-nav]').addClass("shown") :
      $('[id=spec-nav]').removeClass("shown");
  });
});
asdf

// Class toggle for the right navigation column.
$(document).ready(function() {
  $(".spec-nav-item").on('click', function() {
    $('[id=spec-nav]').removeClass('shown');
    $('[id=spec-nav-button]').text($('id=spec-nav-button').data('text-original'));
  });
});