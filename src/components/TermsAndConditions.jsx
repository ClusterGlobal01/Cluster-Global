import React, { useState } from "react";
import FAQ from "../layouts/FAQS";
import '../styles.css';

function TermsAndConditions() {
  const [faqs, setFaqs] = useState([
    {
      question: "Order Cancellation",
      answer:
        "We strive to provide correct product and pricing information. But typographical errors can occur. In such cases, Cluster Globals reserves the right to refuse or cancel the order.",
      open: false
    },
    {
      question: "Price Changes for Products",
      answer: "The price of our products may change frequently. You will be charged at the price that was applicable at the time of the order.",
      open: false
    },
    {
      question: "Product Weight Variations",
      answer: "All fresh product items are sold on estimated weights. Actual product weight may vary. The final invoice will be as per actual weights.",
      open: false
    },
    {
      question: "Return and Refund Policy",
      answer: "Our return and refund policy is designed to ensure customer satisfaction. Please refer to our detailed policy page for more information.",
      open: false
    },
    {
      question: "Privacy and Data Security",
      answer: "We prioritize the privacy and security of your data. Our policies are designed to protect your information. For details, refer to our privacy policy.",
      open: false
    },
    {
      question: "Shipping and Delivery",
      answer: "Details about shipping and delivery, including expected delivery times and any associated fees, can be found in our dedicated shipping policy.",
      open: false
    },
    {
        question: "Delivery Time",
        answer: "We have provide the estimate time to deliver the product and we do every thing to meet the deadline but the actual time can very because of the some circumstances beyond our control.",
        open: false
      },
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="flex flex-row lg:mt-6 mb-32 mt-16 items-center justify-center">
      <div className="flex flex-col justify-center items-center lg:-mb-10 lg:-mt-8 faqs">
        <h1 className="font-semibold text-4xl mb-4">Terms & Conditions</h1>
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default TermsAndConditions;
