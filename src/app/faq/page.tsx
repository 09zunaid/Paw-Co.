import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "What is the Auto-Ship & Save program?",
    answer: "Our Auto-Ship & Save program is a convenient subscription service that automatically delivers your pet's favorite food and supplies to your door. You choose the schedule, and you can modify, skip, or cancel your subscription at any time. Plus, you save 5% on every Auto-Ship order!",
  },
  {
    question: "What is your shipping policy?",
    answer: "We offer free shipping on all orders over $49 and on all Auto-Ship orders. For orders under $49, there is a flat rate shipping fee of $5.99. Most orders ship within 1-2 business days and arrive within 3-5 business days.",
  },
  {
    question: "What is your return policy?",
    answer: "We want you and your pet to be happy! If you're not satisfied with your purchase, you can return unopened items within 30 days for a full refund. Please contact our customer service team to initiate a return.",
  },
  {
    question: "How do I know which food is right for my pet?",
    answer: "Every pet is unique! We recommend checking the life stage and breed size recommendations on each product page. For more personalized advice, you can use our 'My Pet Profile' feature to get AI-powered recommendations or use our live chat to speak with a pet care expert.",
  },
  {
    question: "How do I track my order?",
    answer: "Once your order has shipped, you will receive an email with a tracking number and a link to view your order's progress. You can also find tracking information in your account dashboard.",
  },
];

export default function FaqPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Frequently Asked Questions</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-12">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-bold text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
