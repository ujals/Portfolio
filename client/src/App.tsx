import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import CustomCursor from "./components/glassmorphism/CustomCursor";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

// Add global styles for cursor
const GlobalStyles = () => {
  useEffect(() => {
    // Hide default cursor for all elements
    document.body.style.cursor = 'none';
    
    // Make sure all interactive elements don't show the default cursor
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, [tabindex]'
    );
    
    interactiveElements.forEach(el => {
      const element = el as HTMLElement;
      element.style.cursor = 'none';
    });
    
    // Handle dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as HTMLElement;
              if (element.matches('a, button, [role="button"], input, textarea, select, [tabindex]')) {
                element.style.cursor = 'none';
              }
              element.querySelectorAll('a, button, [role="button"], input, textarea, select, [tabindex]')
                .forEach((el: Element) => {
                  (el as HTMLElement).style.cursor = 'none';
                });
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      // Restore default cursor when component unmounts
      document.body.style.cursor = 'auto';
      interactiveElements.forEach(el => {
        const element = el as HTMLElement;
        element.style.cursor = '';
      });
      observer.disconnect();
    };
  }, []);

  return null;
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <GlobalStyles />
        <CustomCursor />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
