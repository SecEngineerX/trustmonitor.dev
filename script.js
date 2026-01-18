// script.js - Full working version for TrustMonitor waitlist form

document.addEventListener('DOMContentLoaded', () => {
  console.log('script.js loaded and DOM is ready');

  // Supabase setup
  const SUPABASE_URL = 'https://mqtanalbfvuwmystnsud.supabase.co';
  const SUPABASE_ANON_KEY = 'sb_publishable_2fiCrghini-GpEoq0Mx_vg_23FfAgrm';

  // Make sure the supabase global exists (from the CDN script)
  if (typeof supabase === 'undefined') {
    console.error('Supabase library not loaded! Check the CDN script tag in index.html');
    return;
  }

  const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  console.log('Supabase client initialized');

  // Get form elements
  const form = document.getElementById('waitlist-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const submitBtn = document.getElementById('submit-btn');
  const messageBox = document.getElementById('message');

  // Safety check: make sure all elements exist
  if (!form || !nameInput || !emailInput || !submitBtn || !messageBox) {
    console.error('One or more form elements not found. Check IDs in HTML: waitlist-form, name, email, submit-btn, message');
    if (messageBox) {
      messageBox.textContent = 'Form setup error – please refresh or contact support';
      messageBox.classList.add('error');
    }
    return;
  }

  console.log('All form elements found – ready to handle submissions');

  // Helper function to show messages
  function showMessage(msg, type = 'info') {
    messageBox.textContent = msg;
    messageBox.classList.remove('success', 'error', 'info');
    messageBox.classList.add(type);
    messageBox.style.opacity = '1';
    setTimeout(() => {
      messageBox.style.opacity = '0';
    }, 5000);
  }

  // Handle form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    console.log('Form submit event triggered');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // Basic client-side validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showMessage('Please enter a valid email address.', 'error');
      return;
    }

    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Joining...';

    try {
      const insertData = {
        email: email,
        source: 'landing_page'
      };
      if (name) insertData.name = name;

      console.log('Attempting to insert:', insertData);

      const { data, error } = await supabaseClient
        .from('waitlist')
        .insert([insertData])
        .select();

      if (error) {
        console.error('Supabase insert error:', error);
        if (error.code === '23505' || error.message?.toLowerCase().includes('duplicate')) {
          showMessage('This email is already on the waitlist.', 'error');
        } else if (error.message?.includes('permission') || error.code === '42501') {
          showMessage('Permission denied – waitlist may not allow public signups yet.', 'error');
        } else {
          showMessage('An error occurred. Please try again later.', 'error');
        }
      } else {
        console.log('Insert successful:', data);
        showMessage('Success! Redirecting...', 'success');

        // Confetti
        if (typeof confetti !== 'undefined') {
          confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#00bcd4', '#9c27b0', '#ffffff']
          });
        }

        // Clear form
        nameInput.value = '';
        emailInput.value = '';

        // Redirect
        setTimeout(() => {
          window.location.href = 'success.html';
        }, 1500);
      }
    } catch (err) {
      console.error('Unexpected error during submission:', err);
      showMessage('Network error. Please check your connection and try again.', 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Join Waitlist';
    }
  });
});
